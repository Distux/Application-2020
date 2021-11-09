/**
 * @(#)RectangleComponent.java
 * class for generating the rectangle and bouncing it, called by rectangleComponentViewer
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
//import java.awt.geom.Point2D;
 
 
public class RectangleComponent extends JComponent{
    private static final int box_x = 200;
    private static final int box_y = 150;
    private static final int box_width = 20;
    private static final int box_height = 30;
    private Rectangle box;
 
    public RectangleComponent()
    {
        box = new Rectangle(box_x, box_y, box_width, box_height);
    }
 
    public void paintComponent(Graphics g)
    {
        super.paintComponent(g);
        Graphics2D g2 = (Graphics2D) g;
        g2.draw(box);
    }
 
    public void moveTo(int x, int y)
    {
        box.setLocation(x,y);
        repaint();
    }
 
    public void moveBy(int x, int y)
    {
        //box_x += x;
        //box_y += y;
        //moveTo(box_x, box_y);
        box.translate(x, y);
        repaint();
    }
 
    public int getXBox()
    {
        return (int) box.getX();
    }
 
    public int getYBox()
    {
        return (int) box.getY();
    }
    
    public int getHeightBox()
    {
        return box_height;
    }
 
    public int getWidthBox()
    {
        return box_width;
    }
}
