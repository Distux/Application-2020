/**
 * @(#)RectangleComponent.java
 * class for generating the rectangle, called by rectangleComponentViewer
 * @author kalea 
 * @version 1.00 2021/11/8
 */
 
 
 
 
 
import javax.swing.JComponent;
//import java.awt.Color;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Rectangle;
//import java.awt.geom.Ellipse2D;
//import java.awt.geom.Line2D;
import java.util.ArrayList;
//import java.awt.geom.Point2D;
 
 
public class RectangleComponent extends JComponent{
    private static final int BOX_X = 100;
    private static final int BOX_Y = 100;
    private static final int BOX_WIDTH = 20;
    private static final int BOX_HEIGHT = 30;
    private ArrayList<Rectangle> box = new ArrayList<Rectangle>();
 
    public RectangleComponent()
    {
        Rectangle start = new Rectangle(BOX_X, BOX_Y, BOX_WIDTH, BOX_HEIGHT);
        box.add(start);
    }
 
    public void paintComponent(Graphics g)
    {
        super.paintComponent(g);
        Graphics2D g2 = (Graphics2D) g;
        for(int i = 0; i < box.size(); i++)
        {
            g2.draw(box.get(i));
        }
    }
 
    public void moveTo(int x, int y)
    {
        Rectangle next = new Rectangle(x, y, BOX_WIDTH, BOX_HEIGHT);
        box.add(next);
        repaint();
    }
}
 
