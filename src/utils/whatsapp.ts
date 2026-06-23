export function openWhatsAppInquiry(productName: string, whatsappNumber: string): void {
  const message = encodeURIComponent(
    `Hello,\nI would like to inquire about:\n${productName}\n\nPlease send more information.`
  );
  window.open(`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${message}`, "_blank");
}
