export function openWhatsAppInquiry(productName: string, whatsappNumber: string): void {
  const message = encodeURIComponent("Hello ARTCHEM, I would like to inquire about: " + productName + ". Please send me more details.");
  window.open("https://wa.me/" + whatsappNumber.replace(/[^0-9]/g, "") + "?text=" + message, "_blank");
}
