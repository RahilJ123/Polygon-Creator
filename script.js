document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('polygonCanvas');
    const context = canvas.getContext('2d');

    const sidesInput = document.getElementById('sides');
    const drawButton = document.getElementById('drawButton');

    drawButton.addEventListener('click', drawPolygon);

    function drawPolygon() {
        const sides = parseInt(sidesInput.value);

        if (sides < 3) {
            alert("Number of sides must be at least 3.");
            return;
        }

        const polygonName = getPolygonName(sides);

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 100;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();

        for (let i = 0; i < sides; i++) {
            const angle = (i * 2 * Math.PI) / sides;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);

            if (i === 0) {
                context.moveTo(x, y);
            } else {
                context.lineTo(x, y);
            }
        }

        context.closePath();
        context.stroke();

        // Display polygon information
        const polygonInfo = `
            Polygon: ${polygonName}   No.of Sides: ${sides}  No.of Diagonals: ${calculateDiagonals(sides)}  No.of Vertices: ${sides}  Interior Angle: ${calculateInteriorAngle(sides).toFixed(2)} degrees
        `;

        context.font = "12px Segoe UI bold wrap"; // Adjust the font size as needed
        context.fillStyle = "black"; // Adjust the color as needed

        // Adjust the position to make sure the text fits within the canvas
        const textX = -10; // Adjust as needed
        const textY = canvas.height - 380;
        context.fillText(polygonInfo, textX, textY);
    }

    function getPolygonName(sides) {
        switch (sides) {
            case 3:
                return 'Triangle';
            case 4:
                return 'Quadrilateral';
            case 5:
                return 'Pentagon';
            case 6:
                return 'Hexagon';
            case 7:
                return 'Heptagon';
            case 8:
                return 'Octagon';
            case 9:
                return 'Nonagon';
            case 10:
                return 'Decagon';
            case 11:
                return 'Hendecagon';
            case 12:
                return 'Dodecagon';
            case 13:
                return 'Tridecagon';
            case 14:
                return 'Tetradecagon';
            case 15:
                return 'Pentadecagon';
            case 16:
                return 'Hexadecagon';
            case 17:
                return 'Heptadecagon';
            case 18:
                return 'Octodecagon';
            case 19:
                return 'Enneadecagon';
            case 20:
                return 'Icosagon';
            default:
                return `Polygon with ${sides} sides`;
        }
    }

    function calculateDiagonals(sides) {
        return (sides * (sides - 3)) / 2;
    }

    function calculateInteriorAngle(sides) {
        return (180 * (sides - 2)) / sides;
    }
});
