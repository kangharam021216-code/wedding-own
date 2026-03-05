import TopNav from "../_components/TopNav";

export default function Page() {
  return (
    <div className="container">
      <TopNav />
      <div style={ marginTop: 14 } className="card">
        <h1 className="h1">대시보드</h1>
        <p className="sub">오늘/이번달 문의량, 계약/대관 현황을 빠르게 보는 화면 (스타터).</p>
        <div style={ marginTop: 14 }>
          <div className="kpi-grid">
            <div className="kpi">
              <div className="label">오늘 문의량</div>
              <div className="value">0</div>
            </div>
            <div className="kpi">
              <div className="label">이번달 문의량</div>
              <div className="value">0</div>
            </div>
            <div className="kpi">
              <div className="label">이번달 계약/대관</div>
              <div className="value">0</div>
            </div>
          </div>
          <div style={{ marginTop: 14, opacity: 0.9, lineHeight: 1.7 }}>
            <b>다음 구현(요구사항 반영):</b>
            <ul style={{ marginTop: 8 }}>
              <li>고객카드 최상단: 고객명 + 신랑/신부 연락처 분리</li>
              <li>희망일보다 “확정일” 우선 노출(미계약 시 빈값)</li>
              <li>플래너 선택 시: 회사명/연락처/컨설팅 정보 기록</li>
              <li>계약/대관 캘린더 표시를 한 화면에서 보기 쉽게</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
