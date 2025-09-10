

type Block = {
    title: string
    description: string
    imageUrl: string
}

const blocks: Block[] = [
    {
        title: 'Unmatched Efficiency',
        description:
            'Free up valuable hours by delegating time-consuming tasks to highly trained virtual assistants. Experience a significant boost in productivity and output.',
        imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop',
    },
    {
        title: 'Cost-Effective Solutions',
        description:
            'Reduce the operational costs associated with hiring full-time staff. Pay only for the assistance you need.',
        imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
    },
    {
        title: 'Expertise On-Demand',
        description:
            'Access a diverse pool of skilled professionals without the overhead of permanent employment.',
        imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop',
    },
]

export default function WhyChoose() {
    return (
        <section id="benefits" className="section why">
            <div className="container">
                <h2 className="section-title">Why Choose GASA ASSIST?</h2>
                <div className="stack">
                    {blocks.map((b, idx) => (
                        <div key={b.title} className={`why-row ${idx % 2 ? 'reverse' : ''}`}>
                            <div className="why-text">
                                <h3>{b.title}</h3>
                                <p>{b.description}</p>
                            </div>
                            <div className="why-media">
                                <img src={b.imageUrl} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


