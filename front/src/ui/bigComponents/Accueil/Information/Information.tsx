import { CSSProperties, FunctionComponent, PropsWithChildren } from "react"

interface HeaderProps {
}

const Information: FunctionComponent<PropsWithChildren<HeaderProps>> = ({ }) => {
  return (
    <div style={parent}>
        <div style={text}>
        <p>Situé dans l&apos;historique Ville de Québec, l&apos;équipe de Canoë de béton de l&apos;Université Laval est un projet étudiant
          d&apos;envergure regroupant une cinquantaine d&apos;étudiants en génie civil.
          Ces futurs ingénieurs surmontent un défi de taille proposé par l&apos;American Society of Civil Engineers (ASCE)
          et la Société Canadienne de Génie Civil (SCGC). L&apos;objectif: Construire et concevoir un canoë fait entièrement de béton
          léger optimisé pour la course.<br /><br />  Depuis sa fondation en 1996, l&apos;équipe a fait bonne figure en remportant 12
          championnats canadiens et en faisant partie à 9 reprises le top 3 à la Nationale Concrete Canoe Competition (NCCC). </p>
        </div>
      </div>
  )
}

const parent : CSSProperties | undefined  = {
  flexDirection: "column",
  display: "flex",
  backgroundColor: "white",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  fontSize: "1.2em",
  color: "black",
}

const text: CSSProperties | undefined = {
  padding: "60px 15%",
  textAlign: "center",
}


export default Information;