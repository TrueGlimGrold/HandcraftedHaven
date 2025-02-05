import React from "react";

const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton()  {
    return (
        <div
            className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
        >
        <div className="p-4 space-y-4 bg-[#814F46] rounded-xl w-80">
            {/* Image Placeholder */}
            <div className="h-40 w-full rounded-lg bg-gray-300" />

            {/* Ratings Placeholder */}
            <div className="flex items-center space-x-2">
                <div className="h-6 w-20 bg-gray-300" /> {/* Star Icons */}
                <div className="h-6 w-8 bg-gray-300" /> {/* Rating Number */}
            </div>

            {/* Text Details Placeholders */}
            <div className="h-6 w-full bg-gray-300" /> {/* Name */}
            <div className="h-6 w-full bg-gray-300" /> {/* Age */}
            <div className="h-6 w-full bg-gray-300" /> {/* Artist */}
            <div className="h-6 w-full bg-gray-300" /> {/* Style */}
            <div className="h-6 w-full bg-gray-300" /> {/* Category */}
            <div className="h-6 w-full bg-gray-300" /> {/* Price */}

            {/* Status Placeholder */}
            <div className="flex items-center space-x-2">
                <div className="h-6 w-8 bg-gray-300" /> {/* Status Icon */}
                <div className="h-6 w-3/4 bg-gray-300" /> {/* Status Text */}
            </div>

            {/* Buttons Placeholder */}
            <div className="flex justify-between mt-2">
                <div className="h-10 w-1/3 rounded-lg bg-gray-300" /> {/* Learn More */}
                <div className="h-10 w-1/3 rounded-lg bg-gray-300" /> {/* Reviews */}
            </div>
        </div>
        </div>
    );
};

export default function DashboardSkeleton() {
    return (
        <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </>
    );
}


export function ProductSkeleton() {
    return (
        <div className="skeleton-container">
            <div className="skeleton-inner">
                {/* Image Placeholder */}
                <div className="skeleton-image" />

                {/* Ratings Placeholder */}
                <div className="skeleton-rating">
                    <div className="skeleton-stars" />
                    <div className="skeleton-rating-number" />
                </div>

                {/* Text Details Placeholders */}
                <div className="skeleton-text" /> {/* Name */}
                <div className="skeleton-text" /> {/* Age */}
                <div className="skeleton-text" /> {/* Artist */}
                <div className="skeleton-text" /> {/* Style */}
                <div className="skeleton-text" /> {/* Category */}
                <div className="skeleton-text" /> {/* Price */}

                {/* Status Placeholder */}
                <div className="skeleton-status">
                    <div className="skeleton-status-icon" />
                    <div className="skeleton-status-text" />
                </div>

                {/* Buttons Placeholder */}
                <div className="skeleton-buttons">
                    <div className="skeleton-button" />
                    <div className="skeleton-button" />
                </div>
            </div>
        </div>
    );
};

export function ProductsSkeleton() {
    return (
        <div className="skeletons-grid">
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
        </div>
    );

};