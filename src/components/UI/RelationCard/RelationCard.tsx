import { ReactElement } from "react";
import RelationCardItem from "./RelationCardItem";

interface IProps {
  id: string;
  title: string;
  type: string;
  image: string;
  relationType: string;
  className?: string;
}

function RelationCard(props: IProps): ReactElement {
  return <RelationCardItem {...props} />;
}

export default RelationCard;
