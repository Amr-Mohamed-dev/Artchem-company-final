import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "../hooks/use-toast";
import { companyInfo } from "../data/companyInfo";
import { socialLinks } from "../data/socialLinks";
import { pageTransition, fadeInUp, staggerContainer } from "../utils/animations";
import { SectionHeading } from "../components/common/SectionHeading";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import * as SiIcons from "react-icons/si";
import { openWhatsAppInquiry } from "../utils/whatsapp";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone is required"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(10, "Message is too short"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    toast({
      title: "Message Sent Successfully",
      description: "Our executive team will respond within 24 hours.",
    });
    reset();
  };

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-20 min-h-screen bg-background"
    >
      <section className="bg-sidebar py-24 border-b-4 border-primary relative">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Initiate a dialogue with our global industrial specialists.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Contact Info */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-1 space-y-8"
            >
              <div>
                <h3 className="text-2xl font-heading font-bold mb-6 text-foreground">Global Headquarters</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center shrink-0">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Address</h4>
                      <p className="text-muted-foreground">{companyInfo.address}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center shrink-0">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Phone</h4>
                      <a href={`tel:${companyInfo.phone.replace(/[^0-9+]/g, "")}`} className="text-muted-foreground hover:text-primary transition-colors">
                        {companyInfo.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center shrink-0">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Email</h4>
                      <a href={`mailto:${companyInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                        {companyInfo.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center shrink-0">
                      <Clock className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Operating Hours</h4>
                      <p className="text-muted-foreground">{companyInfo.workingHours}</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="pt-8 border-t border-border">
                <h4 className="font-bold text-foreground mb-4">Connect Directly</h4>
                <div className="flex gap-4">
                  <Button onClick={() => openWhatsAppInquiry("General Inquiry", companyInfo.whatsapp)} className="flex-1 bg-[#25D366] hover:bg-[#1DA851] text-white">
                    <MessageCircle className="mr-2" size={18} /> WhatsApp
                  </Button>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <h4 className="font-bold text-foreground mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  {socialLinks.map(social => {
                    const Icon = (SiIcons as any)[social.icon];
                    return (
                      <a 
                        key={social.id}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 rounded bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors"
                      >
                        {Icon && <Icon size={18} />}
                      </a>
                    )
                  })}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white p-8 md:p-10 rounded-lg shadow-xl border border-border">
                <SectionHeading title="Send a Message" align="left" />
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-foreground">Full Name *</label>
                      <Input {...register("name")} className={`bg-muted/50 ${errors.name ? "border-destructive" : ""}`} />
                      {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-foreground">Email Address *</label>
                      <Input type="email" {...register("email")} className={`bg-muted/50 ${errors.email ? "border-destructive" : ""}`} />
                      {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-foreground">Phone Number *</label>
                      <Input {...register("phone")} className={`bg-muted/50 ${errors.phone ? "border-destructive" : ""}`} />
                      {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-foreground">Subject *</label>
                      <Input {...register("subject")} className={`bg-muted/50 ${errors.subject ? "border-destructive" : ""}`} />
                      {errors.subject && <p className="text-xs text-destructive">{errors.subject.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">Message *</label>
                    <Textarea rows={6} {...register("message")} className={`bg-muted/50 resize-none ${errors.message ? "border-destructive" : ""}`} />
                    {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
                  </div>

                  <Button type="submit" size="lg" className="w-full font-bold tracking-widest h-14" disabled={isSubmitting}>
                    {isSubmitting ? "SENDING..." : <><Send className="mr-2" size={18} /> SEND MESSAGE</>}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-muted relative border-t border-border">
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#e5e3df] text-muted-foreground p-4 text-center">
          <MapPin size={48} className="text-primary/40 mb-4" />
          <p className="font-heading font-bold text-xl uppercase tracking-wider text-primary/60">Interactive Map Placeholder</p>
          <p className="text-sm mt-2">{companyInfo.address}</p>
        </div>
      </section>
    </motion.div>
  );
}
