const { Extension, type, api } = require('clipcc-extension');
const Block = api.getBlockInstance();
console.log(Block);
const BlockSvg = Block.BlockSvg;

class Main extends Extension {
    onInit () {
        this.backup();
        this.applyShape(70, 150, 75);
        this.applyColor();
        this.refreshWorkspace();
        console.log(BlockSvg);
    }

    onUninit () {
        this.restore();
        this.refreshWorkspace();
    }

    // backup original block shape data.
    backup () {
        this.originalSvgData = {
            SEP_SPACE_Y: BlockSvg.SEP_SPACE_Y,
            SEP_SPACE_X: BlockSvg.SEP_SPACE_X,
            MIN_BLOCK_X_OUTPUT: BlockSvg.MIN_BLOCK_X_OUTPUT,
            MIN_BLOCK_X_SHADOW_OUTPUT: BlockSvg.MIN_BLOCK_X_SHADOW_OUTPUT,
            MIN_BLOCK_Y: BlockSvg.MIN_BLOCK_Y,
            EXTRA_STATEMENT_ROW_Y: BlockSvg.EXTRA_STATEMENT_ROW_Y,
            MIN_BLOCK_X_WITH_STATEMENT: BlockSvg.MIN_BLOCK_X_WITH_STATEMENT,
            MIN_BLOCK_Y_SINGLE_FIELD_OUTPUT: BlockSvg.MIN_BLOCK_Y_SINGLE_FIELD_OUTPUT,
            MIN_BLOCK_Y_REPORTER: BlockSvg.MIN_BLOCK_Y_REPORTER,
            MIN_STATEMENT_INPUT_HEIGHT: BlockSvg.MIN_STATEMENT_INPUT_HEIGHT,
            NOTCH_WIDTH: BlockSvg.NOTCH_WIDTH,
            NOTCH_HEIGHT: BlockSvg.NOTCH_HEIGHT,
            NOTCH_START_PADDING: BlockSvg.NOTCH_START_PADDING,
            ICON_SEPARATOR_HEIGHT: BlockSvg.ICON_SEPARATOR_HEIGHT,
            NOTCH_PATH_LEFT: BlockSvg.NOTCH_PATH_LEFT,
            NOTCH_PATH_RIGHT: BlockSvg.NOTCH_PATH_RIGHT,
            INPUT_SHAPE_HEXAGONAL: BlockSvg.INPUT_SHAPE_HEXAGONAL,
            INPUT_SHAPE_HEXAGONAL_WIDTH: BlockSvg.INPUT_SHAPE_HEXAGONAL_WIDTH,
            INPUT_SHAPE_ROUND: BlockSvg.INPUT_SHAPE_ROUND,
            INPUT_SHAPE_ROUND_WIDTH: BlockSvg.INPUT_SHAPE_ROUND_WIDTH,
            INPUT_SHAPE_HEIGHT: BlockSvg.INPUT_SHAPE_HEIGHT,
            FIELD_HEIGHT: BlockSvg.FIELD_HEIGHT,
            FIELD_WIDTH: BlockSvg.FIELD_WIDTH,
            FIELD_DEFAULT_CORNER_RADIUS: BlockSvg.FIELD_DEFAULT_CORNER_RADIUS,
            EDITABLE_FIELD_PADDING: BlockSvg.EDITABLE_FIELD_PADDING,
            BOX_FIELD_PADDING: BlockSvg.BOX_FIELD_PADDING,
            DROPDOWN_ARROW_PADDING: BlockSvg.DROPDOWN_ARROW_PADDING,
            FIELD_WIDTH_MIN_EDIT: BlockSvg.FIELD_WIDTH_MIN_EDIT,
            INPUT_AND_FIELD_MIN_X: BlockSvg.INPUT_AND_FIELD_MIN_X,
            INLINE_PADDING_Y: BlockSvg.INLINE_PADDING_Y,
            SHAPE_IN_SHAPE_PADDING: BlockSvg.SHAPE_IN_SHAPE_PADDING,
            CORNER_RADIUS: BlockSvg.CORNER_RADIUS,
            TOP_LEFT_CORNER_START: BlockSvg.TOP_LEFT_CORNER_START,
            TOP_LEFT_CORNER: BlockSvg.TOP_LEFT_CORNER,
            TOP_RIGHT_CORNER: BlockSvg.TOP_RIGHT_CORNER,
            BOTTOM_RIGHT_CORNER: BlockSvg.BOTTOM_RIGHT_CORNER,
            BOTTOM_LEFT_CORNER: BlockSvg.BOTTOM_LEFT_CORNER,
            INNER_TOP_LEFT_CORNER: BlockSvg.INNER_TOP_LEFT_CORNER,
            INNER_BOTTOM_LEFT_CORNER: BlockSvg.INNER_BOTTOM_LEFT_CORNER,
            TOP_RIGHT_CORNER_DEFINE_HAT: BlockSvg.TOP_RIGHT_CORNER_DEFINE_HAT,
            STATEMENT_INPUT_INNER_SPACE: BlockSvg.STATEMENT_INPUT_INNER_SPACE
        };
        this.originalColor = Object.assign({}, Block.Colours);
    }

    restore () {
        Block.Colours = this.originalColor;
        BlockSvg.SEP_SPACE_Y = this.originalSvgData.SEP_SPACE_Y;
        BlockSvg.SEP_SPACE_X = this.originalSvgData.SEP_SPACE_X;
        BlockSvg.MIN_BLOCK_X_OUTPUT = this.originalSvgData.MIN_BLOCK_X_OUTPUT;
        BlockSvg.MIN_BLOCK_X_SHADOW_OUTPUT = this.originalSvgData.MIN_BLOCK_X_SHADOW_OUTPUT;
        BlockSvg.MIN_BLOCK_Y = this.originalSvgData.MIN_BLOCK_Y;
        BlockSvg.EXTRA_STATEMENT_ROW_Y = this.originalSvgData.EXTRA_STATEMENT_ROW_Y;
        BlockSvg.MIN_BLOCK_X_WITH_STATEMENT = this.originalSvgData.MIN_BLOCK_X_WITH_STATEMENT;
        BlockSvg.MIN_BLOCK_Y_SINGLE_FIELD_OUTPUT = this.originalSvgData.MIN_BLOCK_Y_SINGLE_FIELD_OUTPUT;
        BlockSvg.MIN_BLOCK_Y_REPORTER = this.originalSvgData.MIN_BLOCK_Y_REPORTER;
        BlockSvg.MIN_STATEMENT_INPUT_HEIGHT = this.originalSvgData.MIN_STATEMENT_INPUT_HEIGHT;
        BlockSvg.NOTCH_WIDTH = this.originalSvgData.NOTCH_WIDTH;
        BlockSvg.NOTCH_HEIGHT = this.originalSvgData.NOTCH_HEIGHT;
        BlockSvg.NOTCH_START_PADDING = this.originalSvgData.NOTCH_START_PADDING;
        BlockSvg.ICON_SEPARATOR_HEIGHT = this.originalSvgData.ICON_SEPARATOR_HEIGHT;
        BlockSvg.NOTCH_PATH_LEFT = this.originalSvgData.NOTCH_PATH_LEFT;
        BlockSvg.NOTCH_PATH_RIGHT = this.originalSvgData.NOTCH_PATH_RIGHT;
        BlockSvg.INPUT_SHAPE_HEXAGONAL = this.originalSvgData.INPUT_SHAPE_HEXAGONAL;
        BlockSvg.INPUT_SHAPE_HEXAGONAL_WIDTH = this.originalSvgData.INPUT_SHAPE_HEXAGONAL_WIDTH;
        BlockSvg.INPUT_SHAPE_ROUND = this.originalSvgData.INPUT_SHAPE_ROUND;
        BlockSvg.INPUT_SHAPE_ROUND_WIDTH = this.originalSvgData.INPUT_SHAPE_ROUND_WIDTH;
        BlockSvg.INPUT_SHAPE_HEIGHT = this.originalSvgData.INPUT_SHAPE_HEIGHT;
        BlockSvg.FIELD_HEIGHT = this.originalSvgData.FIELD_HEIGHT;
        BlockSvg.FIELD_WIDTH = this.originalSvgData.FIELD_WIDTH;
        BlockSvg.FIELD_DEFAULT_CORNER_RADIUS = this.originalSvgData.FIELD_DEFAULT_CORNER_RADIUS;
        BlockSvg.EDITABLE_FIELD_PADDING = this.originalSvgData.EDITABLE_FIELD_PADDING;
        BlockSvg.BOX_FIELD_PADDING = this.originalSvgData.BOX_FIELD_PADDING;
        BlockSvg.DROPDOWN_ARROW_PADDING = this.originalSvgData.DROPDOWN_ARROW_PADDING;
        BlockSvg.FIELD_WIDTH_MIN_EDIT = this.originalSvgData.FIELD_WIDTH_MIN_EDIT;
        BlockSvg.INPUT_AND_FIELD_MIN_X = this.originalSvgData.INPUT_AND_FIELD_MIN_X;
        BlockSvg.INLINE_PADDING_Y = this.originalSvgData.INLINE_PADDING_Y;
        BlockSvg.SHAPE_IN_SHAPE_PADDING = this.originalSvgData.SHAPE_IN_SHAPE_PADDING;
        BlockSvg.CORNER_RADIUS = this.originalSvgData.CORNER_RADIUS;
        BlockSvg.TOP_LEFT_CORNER_START = this.originalSvgData.TOP_LEFT_CORNER_START;
        BlockSvg.TOP_LEFT_CORNER = this.originalSvgData.TOP_LEFT_CORNER;
        BlockSvg.TOP_RIGHT_CORNER = this.originalSvgData.TOP_RIGHT_CORNER;
        BlockSvg.BOTTOM_RIGHT_CORNER = this.originalSvgData.BOTTOM_RIGHT_CORNER;
        BlockSvg.BOTTOM_LEFT_CORNER = this.originalSvgData.BOTTOM_LEFT_CORNER;
        BlockSvg.INNER_TOP_LEFT_CORNER = this.originalSvgData.INNER_TOP_LEFT_CORNER;
        BlockSvg.INNER_BOTTOM_LEFT_CORNER = this.originalSvgData.INNER_BOTTOM_LEFT_CORNER;
        BlockSvg.TOP_RIGHT_CORNER_DEFINE_HAT = this.originalSvgData.TOP_RIGHT_CORNER_DEFINE_HAT;
        BlockSvg.STATEMENT_INPUT_INNER_SPACE = this.originalSvgData.STATEMENT_INPUT_INNER_SPACE;
    }

    applyColor () {
        this.setColor('control', '#e1a91a');
        this.setColor('data', '#ee7d16');
        this.setColor('event', '#c88330');
        this.setColor('looks', '#8a55d7');
        this.setColor('more', '#632d99');
        this.setColor('motion', '#4a6cd4');
        this.setColor('operators', '#5cb712');
        this.setColor('pen', '#0e9a6c');
        this.setColor('sensing', '#2ca5e2');
        this.setColor('sounds', '#bb42c3');
    }

    applyShape (padding, corner, notch) {
        const { GRID_UNIT } = BlockSvg;
        const multiplier = padding / 100;
        const cornerSize = corner / 100;
        const notchSize = notch / 100;
        BlockSvg.SEP_SPACE_Y = 2 * GRID_UNIT * multiplier;
        BlockSvg.MIN_BLOCK_X = 16 * GRID_UNIT * multiplier;
        BlockSvg.MIN_BLOCK_X_OUTPUT = 12 * GRID_UNIT * multiplier;
        BlockSvg.MIN_BLOCK_X_SHADOW_OUTPUT = 10 * GRID_UNIT * multiplier;
        BlockSvg.MIN_BLOCK_Y = 12 * GRID_UNIT * multiplier;
        BlockSvg.EXTRA_STATEMENT_ROW_Y = 8 * GRID_UNIT * multiplier;
        BlockSvg.MIN_BLOCK_X_WITH_STATEMENT = 40 * GRID_UNIT * multiplier;
        BlockSvg.MIN_BLOCK_Y_SINGLE_FIELD_OUTPUT = 8 * GRID_UNIT * multiplier;
        BlockSvg.MIN_BLOCK_Y_REPORTER = 10 * GRID_UNIT * multiplier;
        BlockSvg.MIN_STATEMENT_INPUT_HEIGHT = 6 * GRID_UNIT * multiplier;
        BlockSvg.NOTCH_WIDTH = 8 * GRID_UNIT * multiplier;
        BlockSvg.NOTCH_HEIGHT = 2 * GRID_UNIT * multiplier * notchSize;
        BlockSvg.NOTCH_START_PADDING = 3 * GRID_UNIT; //* multiplier
        BlockSvg.ICON_SEPARATOR_HEIGHT = 10 * GRID_UNIT * multiplier;
        BlockSvg.NOTCH_PATH_LEFT =
            "c 2,0 3," +
            1 * notchSize +
            " 4," +
            2 * notchSize +
            " l " +
            4 * multiplier * notchSize +
            "," +
            4 * multiplier * notchSize +
            " c 1," +
            1 * notchSize +
            " 2," +
            2 * notchSize +
            " 4," +
            2 * notchSize +
            " h " +
            24 * (multiplier - 0.5) +
            " c 2,0 3,-" +
            1 * notchSize +
            " 4,-" +
            2 * notchSize +
            " l " +
            4 * multiplier * notchSize +
            "," +
            -4 * multiplier * notchSize +
            "c 1,-" +
            1 * notchSize +
            " 2,-" +
            2 * notchSize +
            " 4,-" +
            2 * notchSize;
        BlockSvg.NOTCH_PATH_RIGHT =
            "h " +
            (-4 * (cornerSize - 1) - 5 * (1 - notchSize)) +
            "c -2,0 -3," +
            1 * notchSize +
            " -4," +
            2 * notchSize +
            " l " +
            -4 * multiplier * notchSize +
            "," +
            4 * multiplier * notchSize +
            " c -1," +
            1 * notchSize +
            " -2," +
            2 * notchSize +
            " -4," +
            2 * notchSize +
            " h " +
            -24 * (multiplier - 0.5) +
            " c -2,0 -3,-" +
            1 * notchSize +
            " -4,-" +
            2 * notchSize +
            " l " +
            -4 * multiplier * notchSize +
            "," +
            -4 * multiplier * notchSize +
            "c -1,-" +
            1 * notchSize +
            " -2,-" +
            2 * notchSize +
            " -4,-" +
            2 * notchSize;
        BlockSvg.INPUT_SHAPE_HEXAGONAL =
            "M " +
            4 * GRID_UNIT * multiplier +
            ",0 " +
            " h " +
            4 * GRID_UNIT +
            " l " +
            4 * GRID_UNIT * multiplier +
            "," +
            4 * GRID_UNIT * multiplier +
            " l " +
            -4 * GRID_UNIT * multiplier +
            "," +
            4 * GRID_UNIT * multiplier +
            " h " +
            -4 * GRID_UNIT +
            " l " +
            -4 * GRID_UNIT * multiplier +
            "," +
            -4 * GRID_UNIT * multiplier +
            " l " +
            4 * GRID_UNIT * multiplier +
            "," +
            -4 * GRID_UNIT * multiplier +
            " z";
        BlockSvg.INPUT_SHAPE_HEXAGONAL_WIDTH = 12 * GRID_UNIT * multiplier;
        BlockSvg.INPUT_SHAPE_ROUND =
            "M " +
            4 * GRID_UNIT +
            ",0" +
            " h " +
            4 * GRID_UNIT +
            " a " +
            4 * GRID_UNIT +
            " " +
            4 * GRID_UNIT +
            " 0 0 1 0 " +
            8 * GRID_UNIT +
            " h " +
            -4 * GRID_UNIT +
            " a " +
            4 * GRID_UNIT +
            " " +
            4 * GRID_UNIT +
            " 0 0 1 0 -" +
            8 * GRID_UNIT +
            " z";
        BlockSvg.INPUT_SHAPE_ROUND_WIDTH = 12 * GRID_UNIT * multiplier;
        BlockSvg.INPUT_SHAPE_HEIGHT = 8 * GRID_UNIT * multiplier;
        BlockSvg.FIELD_HEIGHT = 8 * GRID_UNIT * multiplier; // NOTE: Determines string input heights
        BlockSvg.FIELD_WIDTH = 6 * GRID_UNIT * Math.min(multiplier, 1) + 10 * GRID_UNIT * Math.max(multiplier - 1, 0);
        BlockSvg.FIELD_DEFAULT_CORNER_RADIUS = 4 * GRID_UNIT * multiplier;
        BlockSvg.EDITABLE_FIELD_PADDING = 1.5 * GRID_UNIT * multiplier;
        BlockSvg.BOX_FIELD_PADDING = 2 * GRID_UNIT * multiplier;
        BlockSvg.DROPDOWN_ARROW_PADDING = 2 * GRID_UNIT * multiplier;
        BlockSvg.FIELD_WIDTH_MIN_EDIT = 8 * GRID_UNIT * multiplier;
        BlockSvg.INPUT_AND_FIELD_MIN_X = 12 * GRID_UNIT * multiplier;
        BlockSvg.INLINE_PADDING_Y = 1 * GRID_UNIT * multiplier; // For when reporters are inside reporters
        BlockSvg.SHAPE_IN_SHAPE_PADDING[1][0] = 5 * GRID_UNIT * multiplier;
        BlockSvg.SHAPE_IN_SHAPE_PADDING[1][2] = 5 * GRID_UNIT * multiplier;
        BlockSvg.SHAPE_IN_SHAPE_PADDING[1][3] = 5 * GRID_UNIT * multiplier;

        var originalDropdownObject = Block.FieldDropdown.prototype.positionArrow;
        Block.FieldDropdown.prototype.positionArrow = function (x) {
            this.arrowY_ = 11 * multiplier;
            return originalDropdownObject.call(this, x);
        };        
    }

    setColor (category, color) {
        console.log("setColor", category, color);
        const Color = Block.Colours;
        Color[category].primary = color;
        Color[category].secondary = this.shadeColor(color, -5);
        Color[category].tertiary = this.shadeColor(color, -10);
    }

    shadeColor(color, percent) {
        let R = parseInt(color.substring(1, 3), 16);
        let G = parseInt(color.substring(3, 5), 16);
        let B = parseInt(color.substring(5, 7), 16);

        R = parseInt(R * (100 + percent) / 100);
        G = parseInt(G * (100 + percent) / 100);
        B = parseInt(B * (100 + percent) / 100);

        R = (R < 255) ? R : 255;
        G = (G < 255) ? G : 255;
        B = (B < 255) ? B : 255;

        let RR = ((R.toString(16).length == 1) ? "0" + R.toString(16) : R.toString(16));
        let GG = ((G.toString(16).length == 1) ? "0" + G.toString(16) : G.toString(16));
        let BB = ((B.toString(16).length == 1) ? "0" + B.toString(16) : B.toString(16));

        return "#" + RR + GG + BB;
    }

    refreshWorkspace() {
        const workspace = Block.getMainWorkspace();
        if (workspace) {
            const vm = api.getVmInstance();
            if (vm.editingTarget) vm.emitWorkspaceUpdate();
            const flyout = workspace.getFlyout();
            if (flyout) {
                const flyoutWorkspace = flyout.getWorkspace();
                Block.Xml.clearWorkspaceAndLoadFromXml(Block.Xml.workspaceToDom(flyoutWorkspace), flyoutWorkspace);
                workspace.getToolbox().refreshSelection();
                workspace.toolboxRefreshEnabled_ = true;
            }
        }
    }
}

module.exports = Main;
