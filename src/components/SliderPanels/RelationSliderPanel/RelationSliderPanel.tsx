import { RequestStatuses } from "../../../const/requestStatuses";
import { useAppSelector } from "../../../hooks/redux";
import { selectAnimeRelations } from "../../../store/reducers/AnimeInfoSlice";
import { IAnimeRelation } from "../../../types/IAnimeRelation";
import RelationCard from "../../UI/Cards/RelationCard/RelationCard";
import EmptySliderPanel from "../EmptySliderPanel/EmptySliderPanel";

interface IProps {
  relations: IAnimeRelation[];
}

function RelationSliderPanel({ relations }: IProps) {
  console.log(relations);
  return (
    <EmptySliderPanel
      title="Relations"
      elements={relations.map((relation) => (
        <RelationCard
          id={relation.id}
          title={relation.title}
          type={relation.type}
          image={relation.image}
          relationType={relation.relationType}
        />
      ))}
    />
  );
}

export default RelationSliderPanel;
