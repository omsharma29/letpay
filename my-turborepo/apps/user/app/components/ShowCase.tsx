import { User, TrendingUp, Eye, CreditCard } from 'lucide-react'

export default function ShowCase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6  max-w-xl mx-auto">
      {/* Easy Access Card */}
      <div className="group relative bg-[#1C1B3B] rounded-2xl p-4 overflow-hidden transition-all hover:scale-[1.02]">
        <div className="relative z-10 space-y-3">
          <div className="w-8 h-8 rounded-full bg-[#7B61FF]/20 flex items-center justify-center">
            <User className="w-4 h-4 text-[#7B61FF]" />
          </div>
          <h3 className="text-lg font-bold text-white">Easy Access</h3>
          <p className="text-sm text-gray-400">Pay Fast, Stay Connected</p>
        </div>
        <div className="absolute top-0 right-0 w-1 h-full bg-[#69D0F9]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#7B61FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Cashflow Visibility Card */}
      <div className="group relative bg-[#1C1B3B] rounded-2xl p-4 overflow-hidden transition-all hover:scale-[1.02]">
        <div className="relative z-10 space-y-3">
          <div className="w-8 h-8 rounded-full bg-[#7B61FF]/20 flex items-center justify-center">
            <Eye className="w-4 h-4 text-[#7B61FF]" />
          </div>
          <h3 className="text-lg font-bold text-white">Cashflow Visibility</h3>
          <p className="text-sm text-gray-400">Instant Payments, Zero Hassle.</p>
        </div>
        <div className="absolute top-0 right-0 w-1 h-full bg-[#69D0F9]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#7B61FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Connect Friends Card */}
      <div className="group relative bg-[#1C1B3B] rounded-2xl p-4 overflow-hidden transition-all hover:scale-[1.02]">
        <div className="relative z-10 space-y-3">
          <div className="w-8 h-8 rounded-full bg-[#7B61FF]/20 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-[#7B61FF]" />
          </div>
          <h3 className="text-lg font-bold text-white">Connect Friends</h3>
          <p className="text-sm text-gray-400">
            Friendship Made Simpler with Seamless Payments.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-1 h-full bg-[#69D0F9]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#7B61FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Easy Payments Card */}
      <div className="group relative bg-[#1C1B3B] rounded-2xl p-4 overflow-hidden transition-all hover:scale-[1.02]">
        <div className="relative z-10 space-y-3">
          <div className="w-8 h-8 rounded-full bg-[#7B61FF]/20 flex items-center justify-center">
            <CreditCard className="w-4 h-4 text-[#7B61FF]" />
          </div>
          <h3 className="text-lg font-bold text-white">Easy Payments</h3>
          <p className="text-sm text-gray-400">
            One Click, One Email, One Easy Payment.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-1 h-full bg-[#69D0F9]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#7B61FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </div>
  );
}
