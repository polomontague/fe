export const getInitials = (fullName: string | undefined): string => {
  if (!fullName) return "";
  return fullName
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};
