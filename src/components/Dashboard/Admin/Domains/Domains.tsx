"use client";
import {
  TableContainer,
  Table,
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  ActionCell,
  ActionButton,
} from "@/components/core/common/Table";
import { useTranslation } from "react-i18next";
import { ApiTrustedDomain } from "need4deed-sdk";
import { TrashIcon } from "@phosphor-icons/react";
import { Paragraph } from "@/components/styled/text";
import { SectionHeader } from "./styles";
import { AddDomainForm } from "./AddDomainForm";
import { ConfirmationDialog } from "../../Profile/sections/shared/ConfirmationDialog";
import { useState } from "react";
import { useTrustedDomains } from "@/hooks/useTrustedDomains";

export const Domains = () => {
  const { t } = useTranslation();
  const { trustedDomains, deleteTrustedDomain } = useTrustedDomains();
  const [deletingDomain, setDeletingDomain] = useState<ApiTrustedDomain | undefined>(undefined);

  const handleDeleteConfirm = () => {
    if (!deletingDomain) return;
    deleteTrustedDomain(deletingDomain.id, {
      onSuccess: () => setDeletingDomain(undefined),
      onError: () => setDeletingDomain(undefined),
    });
  };

  return (
    <div>
      <SectionHeader>
        <Paragraph>{t("dashboard.admin.domains.helper")}</Paragraph>
      </SectionHeader>
      <AddDomainForm />
      {trustedDomains ? (
        <TableContainer>
          <Table>
            <TableHeader>
              <TableHeaderCell>{t("dashboard.admin.domains.domain")}</TableHeaderCell>
            </TableHeader>
            <TableBody>
              {trustedDomains.map((domain, i) => (
                <TableRow key={domain.id} $isLast={i === trustedDomains.length - 1}>
                  <TableCell>{domain.domain}</TableCell>
                  <ActionCell>
                    <ActionButton type="button" onClick={() => setDeletingDomain(domain)}>
                      <TrashIcon size={20} weight="regular" />
                    </ActionButton>
                  </ActionCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : null}
      {deletingDomain ? (
        <ConfirmationDialog
          title={t("dashboard.admin.domains.removeDomain")}
          message={t("dashboard.admin.domains.deleteMessage", {
            domain: deletingDomain.domain,
          })}
          confirmText={t("dashboard.admin.domains.delete")}
          onCancel={() => setDeletingDomain(undefined)}
          onConfirm={handleDeleteConfirm}
        />
      ) : null}
    </div>
  );
};
