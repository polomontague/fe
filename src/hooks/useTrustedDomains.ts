import { useGetQuery } from "./useGetQuery";
import { apiPathTrustedDomains } from "@/config/constants";
import { ApiTrustedDomain, ApiTrustedDomainPost } from "need4deed-sdk";
import useMutationQuery from "./useMutationQuery";
import axios from "axios";

const TRUSTED_DOMAINS_QUERY_KEY = ["trusted-domains"];

export const useTrustedDomains = () => {
  const { data: trustedDomains } = useGetQuery<ApiTrustedDomain[]>({
    queryKey: TRUSTED_DOMAINS_QUERY_KEY,
    apiPath: apiPathTrustedDomains,
  });
  const { mutate: createTrustedDomain } = useMutationQuery<ApiTrustedDomainPost, unknown>({
    mutationFn: (body) => axios.post(`${apiPathTrustedDomains}`, body).then((res) => res.data),
    queryKeyToInvalidate: TRUSTED_DOMAINS_QUERY_KEY,
    successMessage: "dashboard.admin.domains.createdSuccessfully",
  });
  const { mutate: deleteTrustedDomain } = useMutationQuery<number, unknown>({
    mutationFn: (id: number) => axios.delete(`${apiPathTrustedDomains}/${id}`).then((res) => res.data),
    queryKeyToInvalidate: TRUSTED_DOMAINS_QUERY_KEY,
    successMessage: "dashboard.admin.domains.deletedSuccessfully",
  });

  return {
    trustedDomains,
    createTrustedDomain,
    deleteTrustedDomain,
  };
};
