class SimpleMath {
    static addition(a, b) {
        return a + b;
    }
}

class TestSimpleMath extends unittest.TestCase {
    testAddition() {
        let result = SimpleMath.addition(1, 2);
        this.assertEqual(result, 3);
    }
}