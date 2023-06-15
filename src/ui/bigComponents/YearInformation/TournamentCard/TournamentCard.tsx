import { FunctionComponent, PropsWithChildren } from 'react'
import { Tournament } from '../../../../domain/Tournament'

interface HeaderProps {
  tournament: Tournament
}

const TournamentCard: FunctionComponent<PropsWithChildren<HeaderProps>> = ({
  tournament,
}) => {
  const displayTournamentPosition = (position: number) => {
    if (position == 1) {
      return <img src="/Historique/trophee1.webp" alt="1er" width={100} />
    } else if (position == 2) {
      return <img src="/Historique/trophee2.webp" alt="2e" width={100} />
    } else if (position == 3) {
      return <img src="/Historique/trophee3.webp" alt="3e" width={100} />
    } else {
      return <span>{position}e</span>
    }
  }

  return (
    <div
      className={`p-10 bg-white flex flex-col  justify-around rounded-md min-h-[220px] ${
        tournament.position === 1
          ? 'border-green-400 border-double border-4 '
          : 'border-blue-400 border-solid border-2'
      }`}
    >
      <div className="text-2xl w-full flex justify-between">
        <span className="font-bold">{tournament.name}</span>
        {displayTournamentPosition(tournament.position)}
      </div>
      <div>
        <span> École hôtesse : {tournament.localisation}</span>
        <span className=" text-wrap">{tournament.description}</span>
      </div>
    </div>
  )
}

export default TournamentCard
