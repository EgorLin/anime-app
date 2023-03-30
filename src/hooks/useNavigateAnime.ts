import { useNavigate } from "react-router-dom";
import { RouteNames } from "../router";

function useNavigateAnime(id: string | number) {
  const navigate = useNavigate();
  function openAnime(): void {
    navigate(RouteNames.ANITITLE + id);
  }

  return openAnime;
}

export default useNavigateAnime;
