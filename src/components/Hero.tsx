

type HeroProps = {
    title?: string
    subtitle?: string
    ctaText?: string
    imageUrl?: string
}

export default function Hero({
    title = 'Your Business, Amplified',
    subtitle = 'GASA ASSIST: Expert Virtual Assistance for Modern Professionals',
    ctaText = 'Contact Us Today',
    imageUrl = 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop',
}: HeroProps) {
    return (
        <section className="hero">
            <div className="container hero-grid">
                <div className="hero-copy">
                    <h1>{title}</h1>
                    <p className="subtitle">{subtitle}</p>
                    <div className="actions">
                        <a className="btn primary" href="#contact">{ctaText}</a>
                    </div>
                </div>
                <div className="hero-media">
                    <img src={imageUrl} alt="Professional using laptop" />
                </div>
            </div>
        </section>
    )
}


