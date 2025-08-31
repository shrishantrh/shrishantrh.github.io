import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thanks for reaching out. I'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shrishant@illinois.edu",
      href: "mailto:shrishant@illinois.edu"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Urbana-Champaign, IL",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/shrishant",
      username: "@shrishant"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/shrishant-hattarki",
      username: "shrishant-hattarki"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/shrishant_h",
      username: "@shrishant_h"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-display mb-6">Let's Connect</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Whether you want to discuss research opportunities, collaboration projects, 
              or just want to chat about technology and innovation, I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="surface-card p-8">
                <h3 className="text-heading mb-6">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="bg-input border-border focus:border-accent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-input border-border focus:border-accent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="bg-input border-border focus:border-accent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, question, or just say hello!"
                      rows={6}
                      required
                      className="bg-input border-border focus:border-accent resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:scale-105 transition-transform"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send size={16} />
                        <span>Send Message</span>
                      </div>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="surface-card p-6">
                <h3 className="text-lg font-semibold text-foreground mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.href}
                        className="flex items-center space-x-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                      >
                        <div className="p-2 bg-accent/20 rounded-lg group-hover:bg-accent/30 transition-colors">
                          <Icon className="text-accent" size={20} />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-foreground">{info.label}</div>
                          <div className="text-sm text-muted-foreground">{info.value}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div className="surface-card p-6">
                <h3 className="text-lg font-semibold text-foreground mb-6">Follow Me</h3>
                
                <div className="space-y-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="p-2 bg-accent/20 rounded-lg group-hover:bg-accent/30 transition-colors">
                            <Icon className="text-accent" size={20} />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-foreground">{social.label}</div>
                            <div className="text-sm text-muted-foreground">{social.username}</div>
                          </div>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Quick Response */}
              <div className="surface-card p-6 bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="text-accent" size={24} />
                  <h3 className="text-lg font-semibold text-foreground">Quick Response</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I typically respond to messages within 24 hours. For urgent matters 
                  or collaboration opportunities, feel free to reach out directly via email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border/50 mt-20 pt-8">
        <div className="container mx-auto px-6">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Shrishant Hattarki. Built with React, TypeScript & Tailwind CSS.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;