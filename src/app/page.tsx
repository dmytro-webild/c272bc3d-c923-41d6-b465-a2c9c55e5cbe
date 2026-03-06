"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { AlertCircle, BarChart3, Eye, Gauge, Lightbulb, Palette, Search, Smartphone, Shield, Sparkles, Target, TrendingDown, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="smallMedium"
      sizing="mediumLarge"
      background="noise"
      cardStyle="gradient-radial"
      primaryButtonStyle="flat"
      secondaryButtonStyle="layered"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          navItems={[
            { name: "Problem", id: "problem" },
            { name: "Solution", id: "solution" },
            { name: "Process", id: "process" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Get My Website", href: "contact" }}
          brandName="Luxora Sites"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardTestimonial
          title="Your Business Deserves More Than Just Word-of-Mouth."
          description="We build stunning, high-converting websites for businesses that don't have one yet — so customers can find you, trust you, and choose you."
          tag="Premium Web Design"
          background={{ variant: "glowing-orb" }}
          imageSrc="http://img.b2bpic.net/free-photo/management-verifying-task-progress_482257-80309.jpg"
          imageAlt="Modern luxury web design workspace"
          mediaAnimation="slide-up"
          testimonials={[
            {
              name: "Marcus Johnson",              handle: "Owner, Elite Plumbing",              testimonial: "Went from no website to booking calls daily. Luxora Sites transformed my business overnight.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg?_wi=1"
            },
            {
              name: "Sarah Chen",              handle: "Restaurant Owner",              testimonial: "My restaurant's online visibility increased 300% in the first month. Absolutely worth it.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/asian-attractive-female-cafe-staff-wear-uniform-apron-smiling-cheerful-welcome-cafe-reataurant-with-confident-happiness-with-positive-service-mind-after-lockdown-is-shopfront-entrance_609648-62.jpg?_wi=1"
            },
            {
              name: "David Williams",              handle: "Contractor, Williams & Co",              testimonial: "Finally have a professional online presence. Clients now find me before my competitors.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1652.jpg?_wi=1"
            }
          ]}
          testimonialRotationInterval={5000}
          buttons={[
            { text: "Get My Website", href: "contact" },
            { text: "See How It Works", href: "process" }
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="problem" data-section="problem">
        <SplitAbout
          tag="The Reality"
          title="If Your Business Isn't Online, Customers Assume It Doesn't Exist."
          description="Local businesses without websites are losing customers every single day. Your competitors with professional online presence are capturing the market share you deserve."
          textboxLayout="default"
          useInvertedBackground={true}
          bulletPoints={[
            {
              title: "Customers Search Online First",              description: "87% of people research businesses online before making a purchase decision. If you're not there, they move to your competitor.",              icon: Search
            },
            {
              title: "No Website = Lost Credibility",              description: "A missing website signals unprofessionalism. Modern customers expect every legitimate business to have an online presence.",              icon: AlertCircle
            },
            {
              title: "Facebook Alone Isn't Enough",              description: "Social media is inconsistent and algorithm-dependent. You need a website that's fully under your control and optimized for conversions.",              icon: TrendingDown
            },
            {
              title: "Your Competitors Are Winning",              description: "While you rely on word-of-mouth, competitors with websites are systematically capturing your market. The gap widens every day.",              icon: Target
            }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/strategy-concept-with-wooden-blocks-with-words-it-side-view_176474-10453.jpg"
          imageAlt="Competitive business landscape"
          mediaAnimation="slide-up"
          imagePosition="right"
        />
      </div>

      <div id="solution" data-section="solution">
        <SplitAbout
          tag="The Answer"
          title="From No Website → A Powerful Online Presence."
          description="Luxora Sites specializes in building stunning, high-converting websites for businesses starting from absolute zero. We handle everything—design, development, optimization, launch. You focus on running your business."
          textboxLayout="default"
          useInvertedBackground={false}
          bulletPoints={[
            {
              title: "Custom Luxury Design",              description: "Hand-crafted, premium websites that look expensive and exclusive. Your site stands out from generic templates.",              icon: Sparkles
            },
            {
              title: "Mobile-Optimized & Fast",              description: "Lightning-quick loading speeds on all devices. Google loves it. Your customers will too.",              icon: Zap
            },
            {
              title: "Built to Convert",              description: "Every element is strategically designed to turn visitors into customers. Clear messaging, prominent CTAs, trust signals everywhere.",              icon: Target
            },
            {
              title: "SEO-Ready from Day One",              description: "Your site is optimized for search engines so local customers can actually find you when they're looking for your service.",              icon: Eye
            }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/luxurious-boardroom-space-within-multinational-company-used-meetings_482257-124520.jpg"
          imageAlt="Luxora Sites premium website dashboard"
          mediaAnimation="slide-up"
          imagePosition="left"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureHoverPattern
          title="Why Choose Luxora Sites?"
          description="Everything you need to compete online and win customers. Built specifically for local businesses."
          tag="Premium Features"
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="slide-up"
          features={[
            {
              icon: Palette,
              title: "Luxury Design",              description: "Premium aesthetics that make your business look high-end and trustworthy. No cookie-cutter templates."
            },
            {
              icon: Smartphone,
              title: "Mobile First",              description: "Perfect on every device. Most customers browse on mobile—your site is optimized for them."
            },
            {
              icon: Gauge,
              title: "Lightning Fast",              description: "Optimized for speed. Slow websites lose customers. Ours rank in the top 1% for performance."
            },
            {
              icon: Shield,
              title: "Secure & Reliable",              description: "Enterprise-grade security and uptime. Your site is protected and always available."
            },
            {
              icon: BarChart3,
              title: "Analytics Included",              description: "Track every visitor, conversion, and customer interaction. Know exactly what's working."
            },
            {
              icon: Zap,
              title: "Done-for-You Service",              description: "We handle everything. No technical knowledge needed. Launch and start getting customers."
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="Real Results from Real Business Owners"
          description="See what local business owners are saying about their transformation with Luxora Sites."
          tag="Client Success Stories"
          textboxLayout="default"
          useInvertedBackground={false}
          showRating={true}
          animationType="slide-up"
          testimonials={[
            {
              id: "1",              name: "Marcus Johnson",              handle: "Owner, Elite Plumbing Services",              testimonial: "I didn't think a website would make that much difference. I was wrong. Within 30 days, I went from zero online presence to booking 5+ calls per week from my website alone. The investment paid for itself immediately.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg?_wi=2"
            },
            {
              id: "2",              name: "Sarah Chen",              handle: "Restaurant Owner, Chen's Kitchen",              testimonial: "My restaurant finally looks as premium as our food. The website brought in a completely new customer base. Local searches now lead to us instead of competitors. Best decision for my business.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/asian-attractive-female-cafe-staff-wear-uniform-apron-smiling-cheerful-welcome-cafe-reataurant-with-confident-happiness-with-positive-service-mind-after-lockdown-is-shopfront-entrance_609648-62.jpg?_wi=2"
            },
            {
              id: "3",              name: "David Williams",              handle: "Contractor, Williams & Associates",              testimonial: "No more relying on word-of-mouth. Professional website instantly boosted my credibility with high-value clients. I'm landing bigger projects and getting fewer price-shoppers.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1652.jpg?_wi=2"
            },
            {
              id: "4",              name: "Lisa Rodriguez",              handle: "Salon Owner, Luxe Hair Studio",              testimonial: "The luxury design perfectly matches our brand. Customers comment on how professional the site looks. Bookings increased 250% in the first quarter. Worth every penny.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/front-view-beautiful-caucasian-woman-black-medical-uniform-standing-studio-competent-female-cosmetologist-holding-arms-crossed-grey-background_7502-9241.jpg"
            },
            {
              id: "5",              name: "James Park",              handle: "Small Appliance Repair",              testimonial: "Finally competitive with the big chains. My website gets discovered in local searches constantly. I went from barely getting calls to choosing which jobs to take.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-serious-young-handyman-standing-own-workshop-interior_1163-3158.jpg"
            },
            {
              id: "6",              name: "Angela Torres",              handle: "Fitness Coach, Torres Training",              testimonial: "The site converts visitors into clients effortlessly. My conversion rate is insanely high compared to other coaches I know. This is how you compete in 2025.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-positivity-girl-smiling-camera-posing-with-crossed-arms-gym_231208-4660.jpg"
            }
          ]}
        />
      </div>

      <div id="process" data-section="process">
        <MetricCardEleven
          title="Simple 3-Step Process"
          description="From consultation to launch—we handle everything. You'll have your premium website live and converting customers in weeks."
          tag="How We Work"
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="slide-up"
          metrics={[
            {
              id: "1",              value: "01",              title: "Discovery Call",              description: "Tell us about your business, goals, and target customers",              imageSrc: "http://img.b2bpic.net/free-photo/businessman-working-with-his-colleagues_1098-21578.jpg",              imageAlt: "Business meeting consultation"
            },
            {
              id: "2",              value: "02",              title: "Design & Build",              description: "We design and develop your luxury website with premium conversion optimization",              imageSrc: "http://img.b2bpic.net/free-photo/business-team-working-busy-workplace-concept_53876-137638.jpg",              imageAlt: "Web design process workspace"
            },
            {
              id: "3",              value: "03",              title: "Launch & Grow",              description: "Your site goes live and customers start finding, trusting, and choosing you",              imageSrc: "http://img.b2bpic.net/free-photo/business-people-working-laptop_53876-20848.jpg",              imageAlt: "Website launch success"
            }
          ]}
        />
      </div>

      <div id="beforeafter" data-section="beforeafter">
        <ProductCardFour
          title="Before vs. After: The Transformation"
          description="See the dramatic difference between a business with no online presence and one powered by Luxora Sites."
          tag="Real Transformations"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
          carouselMode="buttons"
          products={[
            {
              id: "before",              name: "Without a Website",              price: "Limited Growth",              variant: "Relying on word-of-mouth",              imageSrc: "http://img.b2bpic.net/free-photo/professional-consultant-discusses-marketing-strategies-with-business-partner-phone-call-female_482257-133440.jpg",              imageAlt: "Business without online presence"
            },
            {
              id: "after",              name: "With Luxora Sites",              price: "Rapid Growth",              variant: "Customers finding you constantly",              imageSrc: "http://img.b2bpic.net/free-photo/low-angle-lawyer-looking-his-laptop_23-2148230748.jpg",              imageAlt: "Business with premium website"
            }
          ]}
        />
      </div>

      <div id="cta" data-section="cta">
        <ContactCenter
          tag="Ready to Win?"
          title="Your Next Customer Is Searching Online Right Now."
          description="Don't let them find your competitor. Launch your luxury website and start converting customers today. Limited availability for new projects. Email us at luxorasites.build@gmail.com to get started."
          background={{ variant: "rotated-rays-animated" }}
          useInvertedBackground={true}
          inputPlaceholder="your@email.com"
          buttonText="Start My Website"
          termsText="We'll contact you within 24 hours to discuss your project. No spam, just premium web solutions."
          onSubmit={(email: string) => {
            // Send email to luxorasites.build@gmail.com
            fetch('/api/contact', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email }),
            }).catch(err => console.error('Error submitting contact form:', err));
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Luxora Sites"
          leftLink={{ text: "Privacy Policy", href: "#" }}
          rightLink={{ text: "Terms of Service", href: "#" }}
        />
      </div>
    </ThemeProvider>
  );
}
