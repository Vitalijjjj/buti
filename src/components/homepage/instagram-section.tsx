"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Instagram, Heart, MessageCircle } from "lucide-react";

// Instagram post data - using hero.png as placeholders for now
const instagramPosts = [
  {
    id: 1,
    type: "image" as const,
    image: "/assets/Hero.png",
    likes: 142,
    comments: 8,
  },
  {
    id: 2,
    type: "image" as const,
    image: "/assets/Hero.png",
    likes: 89,
    comments: 5,
  },
  {
    id: 3,
    type: "image" as const,
    image: "/assets/Hero.png",
    likes: 203,
    comments: 12,
  },
  {
    id: 4,
    type: "image" as const,
    image: "/assets/Hero.png",
    likes: 156,
    comments: 7,
  },
  {
    id: 5,
    type: "cta" as const, // Middle card - CTA
  },
  {
    id: 6,
    type: "image" as const,
    image: "/assets/Hero.png",
    likes: 178,
    comments: 9,
  },
  {
    id: 7,
    type: "image" as const,
    image: "/assets/Hero.png",
    likes: 134,
    comments: 6,
  },
  {
    id: 8,
    type: "image" as const,
    image: "/assets/Hero.png",
    likes: 92,
    comments: 4,
  },
  {
    id: 9,
    type: "image" as const,
    image: "/assets/Hero.png",
    likes: 167,
    comments: 11,
  },
];

export function InstagramSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
            <Instagram className="w-8 h-8 text-white" />
          </div>
          <h2 className="font-primary text-3xl lg:text-4xl font-semibold text-neutral-900 mb-4">
            Follow Our Journey
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            See real client results, behind-the-scenes content, and daily inspiration from our medical aesthetics clinic on Instagram.
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
          {instagramPosts.map((post) => (
            <Card
              key={post.id}
              className="group overflow-hidden transition-all duration-300 rounded-2xl h-80 border border-neutral-200 hover:shadow-xl hover:scale-[1.02] cursor-pointer"
            >
              {post.type === "cta" ? (
                // Center CTA Card
                <div className="h-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex flex-col items-center justify-center text-white p-4 text-center">
                  <Instagram className="w-10 h-10 mb-4" />
                  <h3 className="font-secondary text-lg font-semibold mb-4">
                    View & Connect on Instagram
                  </h3>
                  <Button
                    variant="secondary"
                    className="bg-white text-neutral-800 hover:bg-neutral-100 font-medium"
                  >
                    @facecult
                  </Button>
                </div>
              ) : (
                // Instagram Image Card
                <div className="relative h-full overflow-hidden">
                  <Image
                    src={post.image!}
                    alt="Instagram post"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Instagram Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />

                  {/* Instagram Stats Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-6 text-white">
                      <div className="flex items-center gap-2">
                        <Heart className="w-5 h-5 fill-current" />
                        <span className="font-medium">{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageCircle className="w-5 h-5 fill-current" />
                        <span className="font-medium">{post.comments}</span>
                      </div>
                    </div>
                  </div>

                  {/* Instagram Icon Indicator */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Instagram className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="font-secondary text-2xl font-semibold text-neutral-900 mb-4">
              Join Our Community
            </h3>
            <p className="text-neutral-600 mb-6">
              Follow @facecult for exclusive content, treatment tips, and real transformation stories from our amazing clients.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 text-lg font-medium rounded-full"
            >
              Follow Us on Instagram
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}