

type HeroProps = {
    title?: string
    subtitle?: string
    ctaText?: string
    imageUrl?: string
}


export default function Hero({
    title = 'Build the Remote Team You Deserve',
    subtitle = 'With GASA ASSIST, you can hire high-calibre offshore staff who share your vision, and we upskill them even further to support your expanding business.',
    ctaText = 'CONTACT US TODAY',
    imageUrl = '/assets/hero-person.png', // Place your PNG here
}: HeroProps) {
    return (
        <section className="hero hero-oa">
            <div className="hero-oa-inner">
                <div className="hero-oa-copy fade-in">
                    <h1 className="fade-in delay-1">{title}</h1>
                    <p className="subtitle fade-in delay-2">{subtitle}</p>
                    <div className="actions fade-in delay-3">
                        <a className="btn oa-yellow" href="#contact">{ctaText}</a>
                    </div>
                </div>
                <div className="hero-oa-media fade-in delay-2">
                    <img src={imageUrl} alt="Remote team" className="hero-oa-img" />
                    {/* Optionally add accent SVGs or PNGs here */}
                </div>
            </div>
        </section>
    )
}


