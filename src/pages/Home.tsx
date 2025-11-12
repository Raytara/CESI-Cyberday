import Card from '../component/CardIntervenant'
import { intervenants } from '../data/Intervenants'
import { entreprises } from '../data/Entreprise'
import CardEntreprise from '../component/CardEntreprise'

export default function HomePage() {
    return (
    <div>
        <div className="bg-gray-100 flex flex-wrap items-start justify-center gap-x-4 gap-y-6 py-6">
            {intervenants.map((intervenant) => (
                <div key={intervenant.id} className="max-w-sm w-full mx-4">
                    <Card
                        image={intervenant.photo}
                        title={intervenant.name}
                        message={intervenant.bio}
                    />
                </div>
            ))}
        </div>
        <div className="bg-gray-100 flex flex-wrap items-start justify-center gap-x-4 gap-y-6 py-6">
            {entreprises.map((entreprise) => (
                <div key={entreprise.id} className="max-w-sm w-full mx-4">
                    <CardEntreprise
                        image={entreprise.image}
                        name={entreprise.name}
                        lien={entreprise.lien}
                        description={entreprise.description}
                    />
                </div>
            ))}
        </div>
    </div>
  )
}
