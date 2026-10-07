import { useGetQuery } from "./useGetQuery";
import { apiPathTrustedDomains } from "@/config/constants";
import { ApiTrustedDomain } from "need4deed-sdk";
import useMutationQuery from "./useMutationQuery";
import axios from "axios";

const TRUSTED_DOMAINS_QUERY_KEY = ["trusted-domains"];

export const useTrustedDomains = () => {
  const { data: trustedDomains } = useGetQuery<ApiTrustedDomain[]>({
    queryKey: TRUSTED_DOMAINS_QUERY_KEY,
    apiPath: apiPathTrustedDomains,
  });
  const { mutate: deleteTrustedDomain } = useMutationQuery<number, unknown>({
    mutationFn: (id: number) => axios.delete(`${apiPathTrustedDomains}/${id}`).then((red) => red.data),
    queryKeyToInvalidate: TRUSTED_DOMAINS_QUERY_KEY,
    successMessage: "dashboard.admin.domains.deletedSuccessfully",
  });

  return {
    trustedDomains,
    deleteTrustedDomain,
  };
};
