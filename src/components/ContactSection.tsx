
import { useEffect, useState } from "react";
import {
  PhoneCall,
  Mail,
  Twitter,
  Linkedin,
  Github,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("contact");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    // Create email subject and body
    const subject = `Contact from ${values.name} via Portfolio`;
    const body = `Name: ${values.name}%0D%0AEmail: ${values.email}%0D%0A%0D%0AMessage:%0D%0A${values.message}`;
    
    // Open mail client with pre-filled form
    window.location.href = `mailto:rdrathod2511@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    // Also try to open SMS on mobile (will only work on mobile devices)
    const userAgent = navigator.userAgent || navigator.vendor;
    if (/android|iphone|ipad|ipod/i.test(userAgent.toLowerCase())) {
      // Create a timeout to open SMS after email
      setTimeout(() => {
        window.location.href = `sms:+918421536456?body=Hi Rohit, I'm ${values.name}. ${values.message.substring(0, 100)}${values.message.length > 100 ? '...' : ''}`;
      }, 500);
    }

    // Show toast notification
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });

    // Reset form
    form.reset();
  };

  return (
    <section
      id="contact"
      className="section-padding bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold font-display text-center mb-12 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          Connect <span className="text-primary">With Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div
            className={`${
              isVisible ? "animate-fade-in-right" : "opacity-0"
            } delay-100`}
          >
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Feel free to reach out for collaborations, job opportunities, or
              just to say hi! I'll get back to you as soon as possible.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <PhoneCall className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Phone
                  </h4>
                  <a href="tel:+918421536456" className="text-base hover:text-primary transition-colors">
                    +91 8421536456
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Email
                  </h4>
                  <a href="mailto:rdrathod2511@gmail.com" className="text-base hover:text-primary transition-colors">
                    rdrathod2511@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Twitter className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Twitter
                  </h4>
                  <a
                    href="https://twitter.com/RohitRa89334001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base hover:text-primary transition-colors"
                  >
                    @RohitRa89334001
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Linkedin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    LinkedIn
                  </h4>
                  <a
                    href="https://linkedin.com/in/rohit-rathod"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base hover:text-primary transition-colors"
                  >
                    Rohit Rathod
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    GitHub
                  </h4>
                  <a
                    href="https://github.com/RohitRathod9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base hover:text-primary transition-colors"
                  >
                    github.com/RohitRathod9
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${
              isVisible ? "animate-fade-in-left" : "opacity-0"
            } delay-200`}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">Name</FormLabel>
                      <FormControl>
                        <input
                          {...field}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white dark:bg-gray-800"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">Email</FormLabel>
                      <FormControl>
                        <input
                          {...field}
                          type="email"
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white dark:bg-gray-800"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={5}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white dark:bg-gray-800"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full py-6 rounded-md">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
