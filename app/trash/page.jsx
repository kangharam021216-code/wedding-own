import TopNav from "../_components/TopNav";

export default function Page() {
  return (
    <div className="container">
      <TopNav />

      <div style={{ marginTop: 14 }} className="card">
        <h1 className="h1">보관함</h1>

        <p className="sub">
          삭제 대신 보관 처리 → 보관함에서 복구 또는 완전삭제
        </p>

        <div style={{ marginTop: 14 }}>
          <div className="kpi">
            <div className="label">권한 정책</div>

            <div style={{ marginTop: 10, lineHeight: 1.7, opacity: 0.9 }}>
              • 직급: 대표 / 총괄실장 / 매니저 / 사원 / 거래처
              <br />
              • 삭제(보관 이동)는 매니저까지 가능
              <br />
              • 거래처는 스케줄 / 고객 일부 조회 가능
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
