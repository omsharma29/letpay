import { AnimatedTestimonials } from '@repo/ui/testimonials'
import OmSharma from './assets/OmSharma.jpg'
import Deepak from './assets/Deepak.jpg'
import Anu from './assets/Anu.jpg'
import Subrat from './assets/Subrat.jpg'
import Mayank from './assets/Mayank.jpg'


export default function Testimonials(){
    const testimonials = [
        {
          quote:
            "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
          name: "Sarah Chen",
          designation: "Product Manager at TechFlow",
          src: OmSharma.src ,
        },
        {
          quote:
            "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
          name: "Michael Rodriguez",
          designation: "CTO at InnovateSphere",
          src: Deepak.src,
        },
        {
          quote:
            "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
          name: "Emily Watson",
          designation: "Operations Director at CloudScale",
          src: Anu.src,
        },
        {
          quote:
            "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
          name: "James Kim",
          designation: "Engineering Lead at DataPro",
          src: Mayank.src,
        },
        {
          quote:
            "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
          name: "Lisa Thompson",
          designation: "VP of Technology at FutureNet",
          src: Subrat.src,
        },
      ];
      return <AnimatedTestimonials testimonials={testimonials} />;
}