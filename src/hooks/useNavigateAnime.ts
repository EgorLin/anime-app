import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../router";

function useNavigateAnime(id: string | number) {
  const navigate = useNavigate();
  const openAnime = useCallback(() => {
    navigate(RouteNames.ANITITLE + id);
  }, [id]);

  return openAnime;
}

export default useNavigateAnime;
