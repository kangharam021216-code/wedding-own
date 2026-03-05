import TopNav from "../_components/TopNav";

export default function Page() {
  return (
    <div className="container">
      <TopNav />
      <div style={ marginTop: 14 } className="card">
        <h1 className="h1">고객</h1>
        <p className="sub">고객 카드/상담 진행/연락처/확정일/타임라인 로그를 관리 (스타터).</p>
        <div style={ marginTop: 14 }>
          <div style={{ display: "grid", gap: 12 }}>
            <div className="kpi">
              <div className="label">고객 카드(예시)</div>
              <div style={{ marginTop: 10 }}>
                <div style={{ fontWeight: 700 }}>홍길동 & 김하람</div>
                <div style={{ color: "var(--muted)", marginTop: 6, lineHeight: 1.7 }}>
                  신랑: 010-0000-0000<br/>
                  신부: 010-0000-0000
                </div>
                <div style={{ marginTop: 10 }}>
                  <span style={{ color: "var(--muted)" }}>확정 예식일:</span> <b>—</b>
                </div>
              </div>
            </div>
            <div className="kpi">
              <div className="label">타임라인 로그(예시)</div>
              <div style={{ marginTop: 10, color: "var(--muted)", lineHeight: 1.7 }}>
                • 2026-03-06 10:12 문의 접수<br/>
                • 2026-03-06 11:00 상담 예약<br/>
                • 2026-03-06 14:30 홀 투어<br/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
