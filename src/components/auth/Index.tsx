import { useState } from 'react';
import { AuthCard } from '../../components/auth/AuthCard';
import { AuthHeader } from '../../components/auth/AuthHeader';
import { AuthTabs } from '../../components/auth/AuthTabs';
import { cn } from '@/lib/utils';

export default function UserLog() {
  const [isVisible, setIsVisible] = useState(true);

  return ( <div className="min-h-screen w-full bg-[url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2000')] bg-cover bg-center">
    <div className="min-h-screen w-full backdrop-blur-sm bg-gradient-to-br from-[#0C4CA2]/95 to-black/95 flex items-center justify-center p-4">
      <div 
        className={cn(
          "transform transition-all duration-700 ease-out",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}
        onLoad={() => setIsVisible(false)}
      >
        <AuthCard
          title="Biblioteca Digital"
          description="Tu portal al conocimiento infinito"
          className="bg-white/95 backdrop-blur-lg"
        >
          <AuthHeader />
          <AuthTabs />
        </AuthCard>
      </div>
    </div>
  </div>)
   
}
