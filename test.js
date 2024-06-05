function njahi() {
    const name = "beans"

    function njahe() {
        console.log(`black, ${name}!`);
    }
    return njahe;
}
const cereal = njahi();
cereal();

function expect(val) {
    return {
        toBe: function(other_val) {
            if (val === other_val) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(other_val) {
            if (val !== other_val) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
}