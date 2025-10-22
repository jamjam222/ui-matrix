import { AvatarCircles } from "@/components/ui/magicui/avatar-circles";

const avatarUrls = [
  { imageUrl: "https://avatars.githubusercontent.com/u/101373848?v=4", profileUrl: "https://github.com/mannupaaji" },
  { imageUrl: "https://avatars.githubusercontent.com/u/5523321?v=4", profileUrl: "https://github.com/dillionverma" },
  { imageUrl: "https://avatars.githubusercontent.com/u/6657962?v=4", profileUrl: "https://github.com/joshwcomeau" },
];

export function MagicAvatarCirclesPreview() {
  return <AvatarCircles numPeople={3} avatarUrls={avatarUrls} />;
}
