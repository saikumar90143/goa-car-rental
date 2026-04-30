'use client';

import { trackWhatsAppConversion } from '@/lib/analytics';

interface WhatsAppBookingLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  id?: string;
}

export default function WhatsAppBookingLink({
  href,
  className,
  children,
  id,
}: WhatsAppBookingLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      id={id}
      className={className}
      onClick={() => trackWhatsAppConversion()}
    >
      {children}
    </a>
  );
}
