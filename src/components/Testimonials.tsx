

type Testimonial = {
    quote: string
    name: string
    title: string
    avatarUrl?: string
}

const items: Testimonial[] = [
    {
        quote:
            'GASA ASSIST transformed our workflow. Proactive, efficient, and indispensable for complex schedules.',
        name: 'Michael Chen',
        title: 'CEO, InnovateTech',
    },
    {
        quote:
            'As a founder, every minute counts. Their support lets me focus on strategic growth.',
        name: 'Sarah Miller',
        title: 'Founder, Econavest',
    },
    {
        quote:
            'Coordination skills are top-notch. Keeps our international team aligned and on track.',
        name: 'David Rodriguez',
        title: 'Director, GlobalMark',
    },
]

export default function Testimonials() {
    return (
        <section id="testimonials" className="section testimonials">
            <div className="container">
                <h2 className="section-title">What Our Clients Say</h2>
                <div className="grid three">
                    {items.map((t) => (
                        <div key={t.name} className="card testimonial">
                            <div className="quote">“{t.quote}”</div>
                            <div className="person">
                                <div className="avatar" aria-hidden>👤</div>
                                <div>
                                    <div className="name">{t.name}</div>
                                    <div className="role">{t.title}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


