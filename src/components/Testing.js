import React, { useState } from 'react';

const FetchDataButton = () => {
    // 상태 정의
    const [responseText, setResponseText] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // 서버 URL 정의
    const serverUrl = 'https://jsonplaceholder.typicode.com/todos/1'; // 실제 URL로 바꾸세요

    // 버튼 클릭 시 실행될 함수
    const handleClick = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(serverUrl);
            if (!response.ok) {
                throw new Error('네트워크 응답에 문제가 발생했습니다.');
            }
            const data = await response.text(); // 서버의 응답이 텍스트라고 가정
            setResponseText(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <button onClick={handleClick} disabled={loading}>
                {loading ? '로딩 중...' : '서버 데이터 가져오기'}awefawef
            </button>

            {error && <div style={{ color: 'red' }}>오류: {error}</div>}
            {responseText && !error && <div>{responseText}</div>}
        </div>
    );
};

export default FetchDataButton;