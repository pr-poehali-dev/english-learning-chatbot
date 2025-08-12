import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from '@/components/ui/icon';
import { useState, useEffect } from 'react';

const Index = () => {
  const [progress, setProgress] = useState(0);
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', message: 'Hi! I\'m your English AI tutor. Ready to practice?' },
    { type: 'user', message: 'Yes! Let\'s start with vocabulary.' },
    { type: 'bot', message: 'Great! What does "resilient" mean?' }
  ]);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(75), 500);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { label: 'Слов изучено', value: '1,247', change: '+12%', icon: 'BookOpen' },
    { label: 'Время в чате', value: '24ч', change: '+8%', icon: 'Clock' },
    { label: 'Уровень', value: 'B2', change: 'Upper-Int', icon: 'Trophy' },
    { label: 'Streak дней', value: '15', change: '+1', icon: 'Flame' }
  ];

  const features = [
    {
      icon: 'MessageCircle',
      title: 'Персональный ИИ-наставник',
      description: 'Адаптируется под ваш уровень и стиль обучения'
    },
    {
      icon: 'TrendingUp',
      title: 'Отслеживание прогресса',
      description: 'Детальная аналитика и визуализация успехов'
    },
    {
      icon: 'Target',
      title: 'Цели и достижения',
      description: 'Мотивирующая система наград и челленджей'
    }
  ];

  const faqItems = [
    {
      question: 'Как работает ИИ-наставник?',
      answer: 'Наш ИИ анализирует ваши ответы, выявляет слабые места и подстраивает программу обучения индивидуально под вас.'
    },
    {
      question: 'Сколько времени нужно заниматься?',
      answer: 'Достаточно 15-20 минут в день. ИИ оптимизирует занятия для максимальной эффективности.'
    },
    {
      question: 'Подходит ли для школьников?',
      answer: 'Да! Система адаптируется под возраст и школьную программу, делая изучение увлекательным.'
    },
    {
      question: 'Можно ли заниматься офлайн?',
      answer: 'Основные функции требуют интернет, но некоторые упражнения доступны и оффлайн.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-lightGray to-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brightBlue rounded-lg flex items-center justify-center">
            <Icon name="Bot" size={20} className="text-white" />
          </div>
          <span className="text-xl font-bold text-techBlue">AI English Bot</span>
        </div>
        <Button className="bg-brightBlue hover:bg-blue-600 text-white">
          Начать обучение
        </Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-brightBlue/10 text-brightBlue border-brightBlue/20">
              <Icon name="Sparkles" size={16} className="mr-1" />
              Powered by AI
            </Badge>
            <h1 className="text-5xl font-bold text-techBlue leading-tight">
              Изучай английский с <span className="text-brightBlue">ИИ-наставником</span>
            </h1>
            <p className="text-lg text-neutralGray leading-relaxed">
              Персонализированное обучение через чат-бота для школьников. 
              Адаптивные уроки, реальный прогресс, увлекательный формат.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-brightBlue hover:bg-blue-600 text-white">
                <Icon name="Play" size={20} className="mr-2" />
                Попробовать бесплатно
              </Button>
              <Button variant="outline" size="lg" className="border-brightBlue text-brightBlue hover:bg-brightBlue/5">
                <Icon name="Video" size={20} className="mr-2" />
                Смотреть демо
              </Button>
            </div>
          </div>

          <div className="relative">
            {/* Chat Demo */}
            <Card className="animate-float shadow-2xl border-0 bg-white">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-brightBlue to-blue-600 rounded-full flex items-center justify-center animate-pulse-glow">
                    <Icon name="Bot" size={20} className="text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-sm">AI English Tutor</CardTitle>
                    <CardDescription className="text-xs text-successGreen flex items-center">
                      <div className="w-2 h-2 bg-successGreen rounded-full mr-1"></div>
                      Онлайн
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {chatMessages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                      msg.type === 'user' 
                        ? 'bg-brightBlue text-white' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {msg.message}
                    </div>
                  </div>
                ))}
                <div className="flex justify-start">
                  <div className="bg-gray-100 px-3 py-2 rounded-lg">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-techBlue mb-4">Отслеживание успехов</h2>
          <p className="text-neutralGray">Визуализация вашего прогресса в реальном времени</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-brightBlue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat.icon} size={24} className="text-brightBlue" />
                </div>
                <div className="text-2xl font-bold text-techBlue">{stat.value}</div>
                <div className="text-sm text-neutralGray">{stat.label}</div>
                <Badge variant="secondary" className="mt-2 text-xs bg-successGreen/10 text-successGreen">
                  {stat.change}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="TrendingUp" size={20} />
                Недельный прогресс
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Словарный запас</span>
                  <span>{progress}%</span>
                </div>
                <Progress value={progress} className="h-3" />
                <div className="grid grid-cols-7 gap-2 mt-4">
                  {['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'].map((day, idx) => (
                    <div key={idx} className="text-center">
                      <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center text-xs ${
                        idx < 5 ? 'bg-successGreen text-white' : 'bg-gray-200 text-gray-500'
                      }`}>
                        <Icon name="Check" size={12} />
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{day}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-techBlue mb-4">Как работает</h2>
            <p className="text-neutralGray">Простой путь к свободному английскому</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center group hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-brightBlue/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brightBlue/20 transition-colors">
                  <Icon name={feature.icon} size={32} className="text-brightBlue" />
                </div>
                <h3 className="text-xl font-semibold text-techBlue mb-3">{feature.title}</h3>
                <p className="text-neutralGray leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <Tabs defaultValue="beginner" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="beginner">Начинающий</TabsTrigger>
                <TabsTrigger value="intermediate">Средний</TabsTrigger>
                <TabsTrigger value="advanced">Продвинутый</TabsTrigger>
              </TabsList>
              
              <TabsContent value="beginner" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-techBlue mb-3">Что изучаем:</h4>
                        <ul className="space-y-2 text-neutralGray">
                          <li className="flex items-center gap-2">
                            <Icon name="Check" size={16} className="text-successGreen" />
                            Базовая лексика (500+ слов)
                          </li>
                          <li className="flex items-center gap-2">
                            <Icon name="Check" size={16} className="text-successGreen" />
                            Простые времена
                          </li>
                          <li className="flex items-center gap-2">
                            <Icon name="Check" size={16} className="text-successGreen" />
                            Произношение
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-techBlue mb-3">Формат:</h4>
                        <ul className="space-y-2 text-neutralGray">
                          <li>• Игровые диалоги с ИИ</li>
                          <li>• Визуальные карточки</li>
                          <li>• Аудио-упражнения</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="intermediate" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-techBlue mb-3">Что изучаем:</h4>
                        <ul className="space-y-2 text-neutralGray">
                          <li className="flex items-center gap-2">
                            <Icon name="Check" size={16} className="text-successGreen" />
                            Сложная грамматика
                          </li>
                          <li className="flex items-center gap-2">
                            <Icon name="Check" size={16} className="text-successGreen" />
                            Идиомы и фразовые глаголы
                          </li>
                          <li className="flex items-center gap-2">
                            <Icon name="Check" size={16} className="text-successGreen" />
                            Деловое общение
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-techBlue mb-3">Формат:</h4>
                        <ul className="space-y-2 text-neutralGray">
                          <li>• Ролевые сценарии</li>
                          <li>• Анализ текстов</li>
                          <li>• Дискуссии с ИИ</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="advanced" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-techBlue mb-3">Что изучаем:</h4>
                        <ul className="space-y-2 text-neutralGray">
                          <li className="flex items-center gap-2">
                            <Icon name="Check" size={16} className="text-successGreen" />
                            Академический английский
                          </li>
                          <li className="flex items-center gap-2">
                            <Icon name="Check" size={16} className="text-successGreen" />
                            Подготовка к экзаменам
                          </li>
                          <li className="flex items-center gap-2">
                            <Icon name="Check" size={16} className="text-successGreen" />
                            Культурные нюансы
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-techBlue mb-3">Формат:</h4>
                        <ul className="space-y-2 text-neutralGray">
                          <li>• Дебаты и презентации</li>
                          <li>• Анализ медиа</li>
                          <li>• Создание контента</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-techBlue mb-4">Вопросы и ответы</h2>
          <p className="text-neutralGray">Всё, что нужно знать о нашей платформе</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqItems.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-left font-medium text-techBlue">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-neutralGray leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-techBlue py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Готов начать обучение?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Присоединяйся к тысячам школьников, которые уже изучают английский с нашим ИИ-наставником
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-techBlue hover:bg-gray-100">
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="border-blue-200 text-blue-100 hover:bg-blue-800">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на демо
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brightBlue rounded-lg flex items-center justify-center">
                <Icon name="Bot" size={20} className="text-white" />
              </div>
              <span className="font-bold text-techBlue">AI English Bot</span>
            </div>
            <p className="text-sm text-neutralGray">© 2024. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;