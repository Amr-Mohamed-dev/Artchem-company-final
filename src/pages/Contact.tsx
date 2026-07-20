import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "../hooks/use-toast";
import { companyInfo } from "../data/companyInfo";
import { socialLinks } from "../data/socialLinks";
import {
  pageTransition,
  fadeInUp,
  staggerContainer,
} from "../utils/animations";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa6";
import { openWhatsAppInquiry } from "../utils/whatsapp";
import { Link } from "wouter";
import emailjs from "@emailjs/browser";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone is required"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(10, "Message is too short"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const contactDetails = [
  {
    icon: <MapPin size={18} />,
    label: "Address",
    value: companyInfo.address,
    href: undefined,
  },
  {
    icon: <Phone size={18} />,
    label: "Phone",
    value: companyInfo.phone,
    href: `tel:${companyInfo.phone.replace(/[^0-9+]/g, "")}`,
  },
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: companyInfo.email,
    href: `mailto:${companyInfo.email}`,
  },
  {
    icon: <Clock size={18} />,
    label: "Hours",
    value: companyInfo.workingHours,
    href: undefined,
  },
];

export default function Contact() {
  const { toast } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      toast({
        title: "Message Sent Successfully",
        description: "Our team will respond within 24 hours.",
      });

      reset();
    } catch (error) {
      console.error(error);

      toast({
        title: "Failed to Send",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-[72px] min-h-screen bg-white"
    >
      {/* ─── Asymmetric Hero ──────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[44vh] items-stretch">
            {/* Left — dark panel with headline + contact info */}
            <div className="relative bg-sidebar rounded-2xl my-8 lg:rounded-r-none lg:rounded-l-2xl overflow-hidden flex flex-col justify-center p-10 lg:p-14">
              {/* Hex tile */}
              <div
                className="absolute inset-0 opacity-[0.07] pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='80' height='70'><polygon points='40,2 76,22 76,48 40,68 4,48 4,22' fill='none' stroke='%23ffffff' stroke-width='1'/></svg>`)}")`,
                  backgroundSize: "80px 70px",
                }}
              />
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-primary/60 to-transparent" />

              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="relative z-10"
              >
                <motion.nav
                  variants={fadeInUp}
                  className="flex items-center gap-2 text-[11px] font-semibold text-white/35 uppercase tracking-widest mb-7"
                >
                  <Link href="/">
                    <span className="hover:text-white/60 cursor-pointer transition-colors">
                      Home
                    </span>
                  </Link>
                  <span>/</span>
                  <span className="text-white/60">Contact</span>
                </motion.nav>

                <motion.span
                  variants={fadeInUp}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-primary/50 bg-primary/15 text-primary text-[10px] font-bold tracking-[0.22em] uppercase mb-5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Get in Touch
                </motion.span>

                <motion.h1
                  variants={fadeInUp}
                  className="text-[36px] md:text-[48px] font-heading font-extrabold text-white leading-tight tracking-tight mb-4"
                >
                  Let's Build
                  <br />
                  <span className="text-primary">Something Great</span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-[15px] text-white/55 leading-relaxed mb-8 max-w-sm"
                >
                  Reach out to our team for product inquiries, technical
                  support, or supply chain partnerships.
                </motion.p>

                {/* Contact quick-links */}
                <motion.div variants={staggerContainer} className="space-y-3">
                  {contactDetails.map((d, i) => (
                    <motion.div key={i} variants={fadeInUp}>
                      {d.href ?
                        <a
                          href={d.href}
                          className="flex items-center gap-3 group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-200">
                            {d.icon}
                          </div>
                          <div>
                            <div className="text-[9px] text-white/35 uppercase tracking-widest font-semibold">
                              {d.label}
                            </div>
                            <div className="text-[13px] text-white/75 font-medium group-hover:text-white transition-colors">
                              {d.value}
                            </div>
                          </div>
                        </a>
                      : <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary shrink-0">
                            {d.icon}
                          </div>
                          <div>
                            <div className="text-[9px] text-white/35 uppercase tracking-widest font-semibold">
                              {d.label}
                            </div>
                            <div className="text-[13px] text-white/75 font-medium">
                              {d.value}
                            </div>
                          </div>
                        </div>
                      }
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-center py-10 lg:pl-12"
            >
              <div className="w-full">
                <div className="mb-7">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-primary/30 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.22em] uppercase mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Send a Message
                  </span>
                  <h2 className="text-[26px] font-heading font-extrabold text-foreground tracking-tight mt-2">
                    We'll respond within 24 hours
                  </h2>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-foreground uppercase tracking-wider">
                        Full Name *
                      </label>
                      <Input
                        {...register("name")}
                        className={`h-11 bg-[#F5F7FA] border-gray-200 focus:border-primary text-sm ${errors.name ? "border-destructive" : ""}`}
                      />
                      {errors.name && (
                        <p className="text-xs text-destructive">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-foreground uppercase tracking-wider">
                        Email *
                      </label>
                      <Input
                        type="email"
                        {...register("email")}
                        className={`h-11 bg-[#F5F7FA] border-gray-200 focus:border-primary text-sm ${errors.email ? "border-destructive" : ""}`}
                      />
                      {errors.email && (
                        <p className="text-xs text-destructive">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-foreground uppercase tracking-wider">
                        Phone *
                      </label>
                      <Input
                        {...register("phone")}
                        className={`h-11 bg-[#F5F7FA] border-gray-200 focus:border-primary text-sm ${errors.phone ? "border-destructive" : ""}`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-destructive">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-foreground uppercase tracking-wider">
                        Subject *
                      </label>
                      <Input
                        {...register("subject")}
                        className={`h-11 bg-[#F5F7FA] border-gray-200 focus:border-primary text-sm ${errors.subject ? "border-destructive" : ""}`}
                      />
                      {errors.subject && (
                        <p className="text-xs text-destructive">
                          {errors.subject.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-foreground uppercase tracking-wider">
                      Message *
                    </label>
                    <Textarea
                      rows={5}
                      {...register("message")}
                      className={`bg-[#F5F7FA] border-gray-200 focus:border-primary resize-none text-sm ${errors.message ? "border-destructive" : ""}`}
                    />
                    {errors.message && (
                      <p className="text-xs text-destructive">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-1">
                    <Button
                      type="submit"
                      size="lg"
                      className="flex-1 h-12 font-bold tracking-wider text-[11px] uppercase rounded-sm shadow-none border-0"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ?
                        "Sending…"
                      : <>
                          <Send className="mr-2" size={15} /> Send Message
                        </>
                      }
                    </Button>
                    <Button
                      type="button"
                      size="lg"
                      onClick={() =>
                        openWhatsAppInquiry(
                          "General Inquiry",
                          companyInfo.whatsapp,
                        )
                      }
                      className="flex-1 h-12 bg-[#25D366] hover:bg-[#1DA851] text-white font-bold tracking-wider text-[11px] uppercase rounded-sm border-0 shadow-none"
                    >
                      <MessageCircle className="mr-2" size={15} /> WhatsApp
                    </Button>
                  </div>
                </form>

                {/* Social links */}
                <div className="flex items-center gap-3 mt-5 pt-5 border-t border-gray-100">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">
                    Follow us:
                  </span>
                  {socialLinks.map((social) => {
                    const Icon =
                      (SiIcons as any)[social.icon] ||
                      (FaIcons as any)[social.icon];
                    return (
                      <a
                        key={social.id}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all duration-200"
                      >
                        {Icon && <Icon size={14} />}
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Map ──────────────────────────────────────────────── */}
      <section className="h-[320px] w-full bg-muted relative border-t border-border">
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#e5e3df] text-muted-foreground p-4 text-center">
          <MapPin size={40} className="text-primary/40 mb-3" />
          <p className="font-heading font-bold text-lg uppercase tracking-wider text-primary/60">
            Cairo, Egypt
          </p>
          <p className="text-sm mt-1 text-muted-foreground">
            {companyInfo.address}
          </p>
        </div>
      </section>
    </motion.div>
  );
}
