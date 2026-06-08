"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { REVIEWS, BUSINESS } from "@/lib/content";

const GOOGLE_REVIEW_URL = "https://www.google.com/maps/place/AllPro+Exteriors/@51.0447,-114.0719,15z/data=!4m8!3m7!1s0x0:allproexteriors!8m2!3d51.0447!4d-114.0719!9m1!1b1";
import SectionHeading from "./SectionHeading";

function ReviewCard({ review, delay }: { review: typeof REVIEWS[0]; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl p-6 shadow-card border border-slate-100 hover:shadow-lg hover:border-sky-100 transition-all duration-300 flex flex-col"
      aria-label={`Review by ${review.name}`}
    >
      <Quote className="w-7 h-7 text-sky-200 mb-3 flex-shrink-0" aria-hidden="true" />

      <p className="text-slate-700 leading-relaxed text-sm flex-1 mb-5 italic">
        "{review.text}"
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-sm">{review.name.charAt(0)}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-display font-semibold text-navy-900 text-sm">{review.name}</div>
          <div className="text-slate-500 text-xs mt-0.5">{review.date}</div>
        </div>
        <div
          className="flex gap-0.5 flex-shrink-0"
          aria-label={`${review.rating} star rating`}
          role="img"
        >
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" aria-hidden="true" />
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Reviews() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="reviews" className="section-padding bg-slate-50" aria-labelledby="reviews-heading">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Google Reviews"
          title="What Calgary Homeowners "
          highlight="Are Saying"
          description={`Don't just take our word for it. Here's what real customers say about AllPro Exteriors.`}
          id="reviews-heading"
        />

        {/* Rating summary */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 p-6 bg-white rounded-2xl shadow-card border border-slate-100 max-w-lg mx-auto"
          aria-label="Overall rating summary"
        >
          <div className="text-center">
            <div className="font-display font-black text-6xl text-navy-900 leading-none">
              {BUSINESS.rating.toFixed(1)}
            </div>
            <div className="flex justify-center gap-0.5 mt-2" aria-label="5 stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" aria-hidden="true" />
              ))}
            </div>
          </div>
          <div className="h-12 w-px bg-slate-200 hidden sm:block" aria-hidden="true" />
          <div className="text-center">
            <div className="font-display font-bold text-2xl text-navy-900">
              {BUSINESS.reviewCount} Reviews
            </div>
            <div className="text-slate-500 text-sm mt-1">on Google Business</div>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 font-semibold text-sm mt-1 hover:underline block"
            >
              View on Google →
            </a>
          </div>
        </motion.div>

        {/* Review grid — horizontal scroll on mobile, masonry on desktop */}
        <div className="flex sm:hidden gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4">
          {REVIEWS.map((review, i) => (
            <div key={review.name} className="flex-shrink-0 w-80 snap-start">
              <ReviewCard review={review} delay={0} />
            </div>
          ))}
        </div>
        <div className="hidden sm:columns-2 lg:columns-3 sm:block gap-5 space-y-5">
          {REVIEWS.map((review, i) => (
            <div key={review.name} className="break-inside-avoid mb-5">
              <ReviewCard review={review} delay={i * 0.07} />
            </div>
          ))}
        </div>

        {/* Google CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-10"
        >
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-500 transition-colors border-b-2 border-sky-200 hover:border-sky-400 pb-0.5"
            aria-label="Leave a review on Google for AllPro Exteriors (opens in new tab)"
          >
            Leave us a Google Review
            <Star className="w-4 h-4" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
