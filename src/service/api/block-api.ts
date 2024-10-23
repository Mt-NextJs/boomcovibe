// 업데이트 함수
// {
//     "API": "/api/link/update/order",
//     "METHOD": POST,
//     "목적": "블록 업데이트(정렬)",
//     "HEADER": {
//         "Authorization": "Bearer {token}"
//     },
//     "PARAM": {
//         "order": [ // 블록 목록
//             {
//                 "id": 5, // 블록 id(필수)
//                 "type": 1, // 블록 타입(필수)
//                 "sequence": 2 // 블록 순서(필수)
//                  // 이하 블록 나머지 데이터
//             },
//             {
//                 "id": 6,
//                 "type": 1,
//                 "sequence": 3
//             }
//         ]
//     },
//     "RES": {
//         "code": 200,
//         "data": [
//             {
//                 "id": 5,
//                 "type": 1,
//                 "sequence": 2,
//                 "style": 1
//             },
//             {
//                 "id": 6,
//                 "type": 1,
//                 "sequence": 3,
//                 "style": 2
//             }
//         ]
//     }
// },

// 블록 추가 API 호출 함수
export const addBlock = async (params: AddBlockParams) => {
  const { accessToken, blockData } = params;
  const response = await fetch("/api/link/add", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blockData),
  });

  if (response.ok) {
    const result = await response.json();
    return result.data;
  } else {
    throw new Error("Failed to add block");
  }
};

// 블록 업데이트 API 호출 함수
export const updateBlock = async (params: AddBlockParams) => {
  const { accessToken, blockData } = params;
  console.log("params", params);
  const response = await fetch("/api/link/update", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blockData),
  });

  if (response.ok) {
    const result = await response.json();
    return result.data;
  } else {
    throw new Error("Failed to add block");
  }
};
