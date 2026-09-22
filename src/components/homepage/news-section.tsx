"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, Newspaper } from "lucide-react";

// News articles data
const newsArticles = [
  {
    id: 1,
    title: "The Rise of Preventative Botox: Why Starting Early Matters",
    excerpt: "Discover why more people in their 20s and 30s are turning to preventative Botox treatments and how it can help maintain youthful skin longer with minimal intervention.",
    image: "/assets/Hero.png", // Using hero image as placeholder
    category: "Injectable Treatments",
    publishDate: "December 15, 2024",
    readTime: "5 min read",
    slug: "preventative-botox-starting-early"
  },
  {
    id: 2,
    title: "2025's Hottest Skincare Trends: What Medical Aesthetics Experts Predict",
    excerpt: "From advanced laser technologies to personalised treatment protocols, explore the cutting-edge trends that will transform skincare routines in the coming year.",
    image: "/assets/Hero.png", // Using hero image as placeholder
    category: "Skincare Trends",
    publishDate: "December 10, 2024",
    readTime: "7 min read",
    slug: "2025-skincare-trends-predictions"
  }
];

export function NewsSection() {
  return (
    <section className="pt-16 lg:pt-24 pb-8 lg:pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 rounded-full mb-6">
            <Newspaper className="w-8 h-8 text-secondary-600" />
          </div>
          <h2 className="font-primary text-3xl lg:text-4xl font-semibold text-neutral-900 mb-4">
            Stay Ahead with Skincare Trends
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Discover the latest insights, treatments, and expert advice from the world of medical aesthetics and skincare innovation.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {newsArticles.map((article) => (
            <Card
              key={article.id}
              className="group overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-2xl cursor-pointer"
            >
              {/* Article Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-neutral-800 hover:bg-white">
                    {article.category}
                  </Badge>
                </div>
              </div>

              {/* Article Content */}
              <CardContent className="p-6 lg:p-8">
                {/* Meta Information */}
                <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.publishDate}</span>
                  </div>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="font-secondary text-xl lg:text-2xl font-semibold text-neutral-900 mb-4 leading-tight group-hover:text-primary-600 transition-colors duration-200">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {article.excerpt}
                </p>

                {/* Learn More Button */}
                <Button
                  variant="outline"
                  className="group/btn border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white w-full sm:w-auto"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <div className="bg-accent-cream p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="font-secondary text-2xl font-semibold text-neutral-900 mb-4">
              Explore More Insights
            </h3>
            <p className="text-neutral-600 mb-6">
              Dive deeper into the world of medical aesthetics with our comprehensive collection of articles, treatment guides, and expert insights.
            </p>
            <Button
              size="lg"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 text-lg font-medium rounded-full"
            >
              View All Articles
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}