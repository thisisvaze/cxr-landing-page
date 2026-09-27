import { STORE_REVIEW, TESTIMONIALS } from '@/constants';
import { Star } from 'lucide-react';
import Image from 'next/image';
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import SectionBadge from './ui/section-badge';

// Meta infinity mark (the symbol from the Meta wordmark in global/images.tsx)
const MetaMark = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 39 26" fill="none" aria-hidden className={className}>
        <path d="M4.19375 17.0072C4.19375 18.4897 4.51925 19.628 4.9445 20.3165C5.502 21.2185 6.33375 21.6007 7.182 21.6007C8.2755 21.6007 9.276 21.3293 11.204 18.6625C12.7488 16.525 14.569 13.525 15.7935 11.6442L17.8673 8.45775C19.308 6.24475 20.9755 3.78475 22.8873 2.11725C24.4485 0.756 26.1322 0 27.8267 0C30.6717 0 33.3818 1.6485 35.4555 4.7405C37.7253 8.127 38.827 12.3923 38.827 16.794C38.827 19.4108 38.3112 21.3332 37.4335 22.8522C36.5855 24.3212 34.933 25.789 32.1527 25.789V21.6007C34.5332 21.6007 35.1273 19.4132 35.1273 16.91C35.1273 13.3427 34.2955 9.384 32.4632 6.55525C31.1632 4.54875 29.4783 3.32275 27.6243 3.32275C25.6193 3.32275 24.0057 4.83525 22.1922 7.5315C21.2282 8.964 20.2385 10.7098 19.1273 12.6798L17.904 14.847C15.4465 19.204 14.824 20.1965 13.5955 21.8342C11.442 24.702 9.603 25.7892 7.182 25.7892C4.31 25.7892 2.494 24.5455 1.3695 22.6715C0.45075 21.1442 0 19.1405 0 16.8575L4.19375 17.0072Z" fill="currentColor"/>
        <path d="M3.30664 5.03625C5.22914 2.0725 8.00414 0 11.1864 0C13.0294 0 14.8616 0.5455 16.7749 2.1075C18.8676 3.81575 21.0984 6.62825 23.8811 11.2635L24.8786 12.927C27.2876 16.9398 28.6581 19.0043 29.4601 19.9778C30.4916 21.228 31.2141 21.6007 32.1526 21.6007C34.5329 21.6007 35.1269 19.4132 35.1269 16.91L38.8266 16.794C38.8266 19.4108 38.3109 21.3332 37.4331 22.8522C36.5851 24.3212 34.9326 25.789 32.1524 25.789C30.4241 25.789 28.8931 25.4137 27.1999 23.8165C25.8984 22.5905 24.3766 20.4125 23.2059 18.4548L19.7239 12.638C17.9764 9.71875 16.3739 7.54225 15.4464 6.5565C14.4484 5.4965 13.1659 4.2165 11.1189 4.2165C9.46214 4.2165 8.05514 5.37925 6.87789 7.1575L3.30664 5.03625Z" fill="currentColor"/>
        <path d="M11.119 4.21675C9.46225 4.21675 8.05525 5.37925 6.878 7.1575C5.213 9.67 4.19375 13.413 4.19375 17.0072C4.19375 18.4897 4.51925 19.628 4.9445 20.3165L1.369 22.6715C0.451 21.1442 0 19.1405 0 16.8575C0 12.7055 1.1395 8.378 3.30675 5.03625C5.22925 2.0725 8.00425 0 11.1865 0L11.119 4.21675Z" fill="currentColor"/>
    </svg>
);

const Testimonials = () => {
    return (
        <Wrapper className="py-20 lg:py-32">
            <div className="flex flex-col items-center text-center gap-4 mb-16 max-w-3xl mx-auto">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="What our users say" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="type-heading">
                        Loved by homeschoolers <br className="hidden sm:inline" />
                        and curious learners
                    </h2>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.4}>
                    <p className="type-lead max-w-xl mx-auto">
                        More than 2,000 homeschooling families, teachers and curious
                        learners use CuriosityXR on Meta Quest.
                    </p>
                </AnimationContainer>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {TESTIMONIALS.map((testimonial, index) => (
                    <AnimationContainer
                        key={index}
                        animation="fadeUp"
                        delay={0.2 + (index % 3) * 0.1}
                        className="h-full"
                    >
                        <figure className="flex h-full flex-col gap-5 rounded-2xl bg-neutral-900/80 border border-white/10 hover:border-white/20 transition-colors p-6 sm:p-7">
                            <div className="flex gap-1" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                                ))}
                            </div>

                            <blockquote
                                className="text-left text-sm sm:text-[15px] leading-relaxed text-neutral-200"
                            >
                                &ldquo;{testimonial.content.replace(/^["'\s]+|["'\s]+$/g, '')}&rdquo;
                            </blockquote>

                            <figcaption className="mt-auto flex items-center gap-3.5 pt-5 border-t border-white/5">
                                <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-white/10">
                                    <Image
                                        src={testimonial.image}
                                        alt=""
                                        fill
                                        sizes="40px"
                                        className="object-cover"
                                    />
                                </div>
                                <div className="text-left">
                                    <p className="font-semibold text-sm text-white">{testimonial.author}</p>
                                    <p className="flex items-center gap-1 text-xs text-neutral-400">
                                        {testimonial.role === STORE_REVIEW && (
                                            <>
                                                <MetaMark className="h-2.5 w-[15px] shrink-0 text-[#0081FB]" />
                                                <span className="sr-only">Verified owner, </span>
                                            </>
                                        )}
                                        {testimonial.role}
                                    </p>
                                </div>
                            </figcaption>
                        </figure>
                    </AnimationContainer>
                ))}
            </div>

        </Wrapper>
    );
};

export default Testimonials;
