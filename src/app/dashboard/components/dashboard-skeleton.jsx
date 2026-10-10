// src/app/dashboard/components/dashboard-skeleton.jsx

export default function DashboardSkeleton() {
    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="w-full h-44 sm:h-52 bg-muted/60 animate-pulse border-b border-border" />
            <div className="container mx-auto px-4 sm:px-6 max-w-5xl -mt-16 sm:-mt-20 space-y-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-end gap-5">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-card border-4 border-background animate-pulse shadow-md" />
                    <div className="space-y-2 text-center sm:text-left">
                        <div className="h-6 w-36 rounded-xl bg-muted animate-pulse" />
                        <div className="h-4 w-48 rounded-lg bg-muted/70 animate-pulse" />
                    </div>
                </div>
                <div className="h-11 w-72 rounded-2xl bg-muted/70 animate-pulse" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4">
                    <div className="h-40 rounded-3xl bg-card border border-border animate-pulse" />
                    <div className="h-40 rounded-3xl bg-card border border-border animate-pulse" />
                    <div className="h-40 rounded-3xl bg-card border border-border animate-pulse" />
                </div>
            </div>
        </div>
    );
}