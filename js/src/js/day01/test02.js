var age = 29;

/* 문자에 스타일 속성 적용 */
document.write('<div style="color: red; font-size: 24pt;">외부 자바스크립트 파일</div>');
document.write('전은석의 나이는 ' + age + ' 입니다.');
document.write('<p>' + 
//    '<button type="button" onclick="alert(\'외부 자바스크립트 파일\')">버튼 클릭1</button>' + 
    '<button type="button" onclick="alert(' + "'외부 자바스크립트 파일'" + ')">버튼 클릭1</button>' + 
'</p>');