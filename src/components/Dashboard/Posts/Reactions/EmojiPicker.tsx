"use client";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useTranslation } from "react-i18next";

type EmojiPickerProps = {
  onChange: (value: string) => void;
};

export default function EmojiPicker({ onChange }: EmojiPickerProps) {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return <Picker data={data} locale={lang} onEmojiSelect={(val: { native: string }) => onChange(val.native)} />;
}
