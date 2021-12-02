export function test(description, callback) {
  try {
    callback();
    console.log(`🟢 성공: ${description}`);
  } catch (error) {
    console.groupCollapsed(`🔴 실패: ${description}`);
    console.error(error.message);
    console.groupEnd();
  }
}
