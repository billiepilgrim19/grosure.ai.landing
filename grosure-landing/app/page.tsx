'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTAButton from '@/components/CTAButton';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-container pt-20 pb-12 md:pt-28 md:pb-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-primary mb-6 leading-tight tracking-tight">
                Your Complete Kitchen Co Pilot
              </h1>
              <p className="text-lg md:text-xl text-secondary mb-8 leading-relaxed">
                Meet Olive, your AI kitchen agent. Transform your kitchen with AI-powered pantry management, smart shopping lists,
                personalized meal plans, and intelligent recipe discovery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton href="#download">Download Now</CTAButton>
                <CTAButton variant="secondary" href="#features">Learn More</CTAButton>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[600px] flex items-center justify-center">
                <div className="relative w-full max-w-[350px] h-[600px] mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-[40px] blur-3xl"></div>
                  <div className="relative bg-white rounded-[40px] shadow-2xl overflow-hidden border-[6px] border-primary">
                    <video
                      src="/videos/olive.webm"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="hidden sm:block w-full h-full object-cover"
                      ref={(video) => {
                        if (video) {
                          video.playbackRate = 2.0;
                        }
                      }}
                    >
                      Your browser does not support the video tag.
                    </video>
                    <Image
                      src="/images/app-home.png"
                      alt="Olive mobile app home screen"
                      fill
                      priority
                      sizes="(max-width: 640px) 100vw"
                      className="object-cover sm:hidden"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="section-container bg-white">
          <div className="text-center mb-16">
            <h2 className="section-title mx-auto">Everything You Need to Master Your Kitchen</h2>
            <p className="section-subtitle mx-auto">
              Powerful features designed to simplify your kitchen management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* AI Chat Assistant */}
            <div className="card">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-medium mb-3 text-primary">Olive - Your AI Kitchen Agent</h3>
              <p className="text-secondary leading-relaxed">
                Meet Olive, your personal kitchen AI that understands context. Get instant help with recipes,
                shopping, and meal planning through natural conversation.
              </p>
            </div>

            {/* Smart Pantry Management */}
            <div className="card">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="text-xl font-medium mb-3 text-primary">Smart Pantry Management</h3>
              <p className="text-secondary leading-relaxed">
                Real-time food inventory tracking with expiration monitoring. Never waste food
                again with smart alerts and auto-categorization.
              </p>
            </div>

            {/* Intelligent Shopping Lists */}
            <div className="card">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🛒</span>
              </div>
              <h3 className="text-xl font-medium mb-3 text-primary">Intelligent Shopping Lists</h3>
              <p className="text-secondary leading-relaxed">
                Create lists through conversation or manually. Organize by category, track completion,
                and share with family members.
              </p>
            </div>

            {/* Recipe Discovery */}
            <div className="card">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">👨‍🍳</span>
              </div>
              <h3 className="text-xl font-medium mb-3 text-primary">Recipe Discovery & Management</h3>
              <p className="text-secondary leading-relaxed">
                Thousands of recipes at your fingertips. AI-generated recipes based on ingredients
                you have, with step-by-step instructions.
              </p>
            </div>

            {/* Personalized Meal Planning */}
            <div className="card">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="text-xl font-medium mb-3 text-primary">Personalized Meal Planning</h3>
              <p className="text-secondary leading-relaxed">
                Custom meal plans tailored to your dietary needs. Auto-generate shopping lists
                from your weekly meal schedule.
              </p>
            </div>

            {/* Cloud Sync */}
            <div className="card">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">☁️</span>
              </div>
              <h3 className="text-xl font-medium mb-3 text-primary">Cloud Sync & Offline Access</h3>
              <p className="text-secondary leading-relaxed">
                Works offline with local storage. Automatic sync across devices with secure
                cloud backup. Never lose your data.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title mx-auto">Three Simple Steps to Kitchen Mastery</h2>
            <p className="section-subtitle mx-auto">
              Get started in minutes and transform your kitchen management
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent text-white rounded-2xl flex items-center justify-center text-2xl font-medium mx-auto mb-4 shadow-sm">
                1
              </div>
              <h3 className="text-xl font-medium mb-3 text-primary">Download and Create Account</h3>
              <p className="text-secondary leading-relaxed">
                Quick sign-up with email. Secure authentication and personalize your preferences
                to get started.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent text-white rounded-2xl flex items-center justify-center text-2xl font-medium mx-auto mb-4 shadow-sm">
                2
              </div>
              <h3 className="text-xl font-medium mb-3 text-primary">Talk to Olive</h3>
              <p className="text-secondary leading-relaxed">
                Chat naturally with Olive about your kitchen needs. Add items, create lists, discover recipes,
                and get personalized suggestions from your AI kitchen agent.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent text-white rounded-2xl flex items-center justify-center text-2xl font-medium mx-auto mb-4 shadow-sm">
                3
              </div>
              <h3 className="text-xl font-medium mb-3 text-primary">Manage Everything</h3>
              <p className="text-secondary leading-relaxed">
                Track inventory, follow meal plans, shop smarter with organized lists, and reduce
                food waste effortlessly.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-container bg-white">
          <div className="text-center mb-16">
            <h2 className="section-title mx-auto">Why Choose grosure?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start">
              <div className="text-accent text-3xl mr-4 flex-shrink-0">💰</div>
              <div>
                <h3 className="text-xl font-medium mb-2 text-primary">Save Money</h3>
                <p className="text-secondary leading-relaxed">Reduce food waste by tracking expiration dates and using what you have</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-accent text-3xl mr-4 flex-shrink-0">⏰</div>
              <div>
                <h3 className="text-xl font-medium mb-2 text-primary">Save Time</h3>
                <p className="text-secondary leading-relaxed">AI-powered meal planning and shopping list generation in seconds</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-accent text-3xl mr-4 flex-shrink-0">🥗</div>
              <div>
                <h3 className="text-xl font-medium mb-2 text-primary">Eat Healthier</h3>
                <p className="text-secondary leading-relaxed">Personalized meal plans based on your dietary restrictions and goals</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-accent text-3xl mr-4 flex-shrink-0">📋</div>
              <div>
                <h3 className="text-xl font-medium mb-2 text-primary">Stay Organized</h3>
                <p className="text-secondary leading-relaxed">All kitchen management in one intuitive app</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-accent text-3xl mr-4 flex-shrink-0">🧠</div>
              <div>
                <h3 className="text-xl font-medium mb-2 text-primary">Cook Smarter</h3>
                <p className="text-secondary leading-relaxed">Recipe discovery based on ingredients you already have</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-accent text-3xl mr-4 flex-shrink-0">👨‍👩‍👧‍👦</div>
              <div>
                <h3 className="text-xl font-medium mb-2 text-primary">Family Friendly</h3>
                <p className="text-secondary leading-relaxed">Share shopping lists and meal plans with your household</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology & Security Section */}
        <section className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title mx-auto">Built with Modern Technology, Secured for Your Privacy</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-medium mb-4 flex items-center text-primary">
                <span className="text-accent mr-3 text-2xl">🔒</span>
                Security First
              </h3>
              <ul className="space-y-2 text-secondary leading-relaxed">
                <li>• Industry-standard encryption</li>
                <li>• Secure authentication</li>
                <li>• Regular security updates</li>
                <li>• Data protection compliance</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-medium mb-4 flex items-center text-primary">
                <span className="text-accent mr-3 text-2xl">🛡️</span>
                Privacy Focused
              </h3>
              <ul className="space-y-2 text-secondary leading-relaxed">
                <li>• Your data belongs to you</li>
                <li>• Local-first architecture</li>
                <li>• Optional cloud backup</li>
                <li>• Transparent data practices</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="section-container bg-white">
          <div className="text-center mb-16">
            <h2 className="section-title mx-auto">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "What platforms is grosure available on?",
                a: "grosure is currently available on iOS and Android devices. We're working on a web version coming soon."
              },
              {
                q: "Is there a free version?",
                a: "Yes! grosure offers a free tier with core features. Premium plans unlock advanced AI capabilities and unlimited storage."
              },
              {
                q: "How does Olive, the AI assistant, work?",
                a: "Olive uses natural language processing to understand your requests. Simply chat like you would with a friend, and Olive will help you manage your kitchen tasks."
              },
              {
                q: "Can I use the app offline?",
                a: "Absolutely! grosure works offline with local storage. Your data syncs automatically when you're back online."
              },
              {
                q: "How do you protect my data?",
                a: "We use industry-standard encryption, secure authentication, and follow strict privacy policies. Your data is stored locally first, with optional cloud backup."
              },
              {
                q: "Can I share shopping lists with family members?",
                a: "Yes! You can easily share shopping lists and meal plans with family members through the app."
              }
            ].map((faq, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-medium mb-2 text-primary">{faq.q}</h3>
                <p className="text-secondary leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Download/CTA Section */}
        <section id="download" className="section-container bg-gradient-to-br from-accent to-accent/90 text-white">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 tracking-tight">
              Ready to Transform Your Kitchen?
            </h2>
            <p className="text-xl mb-8 opacity-95 leading-relaxed">
              Join thousands of home cooks who have simplified their kitchen management with Olive and grosure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="#"
                className="bg-white text-primary px-8 py-4 rounded-xl font-medium hover:bg-surface transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Download on iOS
              </a>
              <a
                href="#"
                className="bg-primary text-white px-8 py-4 rounded-xl font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Download on Android
              </a>
            </div>
            <p className="text-sm opacity-80">Available on iOS and Android • Free to download</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
