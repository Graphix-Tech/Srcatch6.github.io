function initializeScratchCard() {
    $("#card").wScratchPad({
        size: 100, // The size of the brush/scratch.
        bg: `Images/Gpay_Card 1.jpg`, // Background image path.
        fg: `Images/front.jpg`, // Foreground image path.
        cursor: "pointer", // Set cursor.
        scratchUp: function () {
            // Add any action you want to perform when the scratch card is revealed
            alert("Scratch card revealed!");
        },
    });
}

initializeScratchCard();
