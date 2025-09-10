

type Service = { icon: string; title: string; description: string }

const defaultServices: Service[] = [
    {
        icon: '📑',
        title: 'Administrative Support',
        description:
            'From scheduling and email management to document preparation and data entry, our VAs keep your business running smoothly.',
    },
    {
        icon: '🗓️',
        title: 'Calendar & Travel',
        description:
            'Expert management of your schedule, appointments, and seamless coordination of travel arrangements.',
    },
    {
        icon: '📌',
        title: 'Project Coordination',
        description:
            'Assistance with timelines, task allocation, and communication to ensure successful project delivery.',
    },
]

type ServicesProps = { services?: Service[] }

export default function Services({ services = defaultServices }: ServicesProps) {
    return (
        <section id="services" className="section services">
            <div className="container">
                <h2 className="section-title">Our Specialized Virtual Assistant Services</h2>
                <div className="grid three services-grid">
                    {services.map((s) => (
                        <div key={s.title} className="card service-card">
                            <div className="service-icon" aria-hidden>{s.icon}</div>
                            <h3>{s.title}</h3>
                            <p>{s.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


