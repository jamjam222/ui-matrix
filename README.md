# UI Matrix

여러 UI 라이브러리의 컴포넌트를 한 곳에서 비교하고 사용할 수 있는 Next.js 프로젝트입니다.

## 🎨 지원 UI 라이브러리

- **shadcn/ui** - https://ui.shadcn.com
- **Aceternity UI** - https://ui.aceternity.com
- **Magic UI** - https://magicui.design
- **Origin UI** - https://originui.com

## 📦 컴포넌트 설치

각 라이브러리의 컴포넌트는 독립된 폴더에 설치되어 이름 충돌을 방지합니다.

```bash
# shadcn/ui 컴포넌트 설치
npm run add:shadcn button

# Aceternity UI 컴포넌트 설치
npm run add:aceternity moving-border

# Magic UI 컴포넌트 설치
npm run add:magicui button

# Origin UI 컴포넌트 설치 (comp-XX 형식)
npm run add:originui comp-01
```

**자세한 설치 가이드:** [COMPONENT_INSTALLATION.md](./COMPONENT_INSTALLATION.md)

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
