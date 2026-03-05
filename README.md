# OWN CRM (Rebuilt Starter)

이 프로젝트는 **Vercel에서 100% 빌드 통과**를 목표로, 깨끗하게 다시 만든 Next.js(App Router) 스타터입니다.
(이전 대화에서 반복되던 `style={ ... }` 문법 오류, 불필요한 실험 페이지, PR/브랜치 꼬임 등을 모두 제거했습니다.)

## 포함된 페이지
- /dashboard (대시보드)
- /customers (고객)
- /bookings (계약/대관)
- /calendar (캘린더)
- /trash (보관함)

## 배포 방법 (가장 쉬운 루트)
1) GitHub에서 **새 레포** 생성 (예: `own-crm-rebuilt`)
2) 이 폴더의 **내용물 전체**(app, package.json 등)를 레포 **루트**에 업로드 후 Commit
3) Vercel → New Project → GitHub 레포 선택 → Deploy

## 로컬 실행
```bash
npm install
npm run dev
```

## 다음 단계(원하면)
- Supabase Auth(이메일/휴대폰) + 권한(대표/총괄실장/매니저/사원/거래처)
- 멀티 지점/홀(빛으로 아트 스토리 - 전시동) 테넌트 구조
- 고객카드 상단: 신랑/신부 연락처 분리, 확정일 우선 노출, 타임라인 로그 UI
- 캘린더에 계약/대관/홀드 분리 표시 (홀드 7일 규칙 등)
